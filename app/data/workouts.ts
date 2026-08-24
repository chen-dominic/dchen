import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

export type WorkoutSet = {
  type: string;
  weightLbs: number | null;
  reps: number;
};

export type WorkoutExercise = {
  name: string;
  sets: WorkoutSet[];
};

export type WorkoutSession = {
  title: string;
  startTime: string;
  endTime: string;
  description: string;
  exercises: WorkoutExercise[];
};

type CsvRow = Record<string, string>;

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function parseCsv(csv: string): CsvRow[] {
  const records: string[][] = [];
  let record: string[] = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < csv.length; index += 1) {
    const character = csv[index];

    if (quoted) {
      if (character === '"' && csv[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
    } else if (character === '"') {
      quoted = true;
    } else if (character === ",") {
      record.push(field);
      field = "";
    } else if (character === "\n") {
      record.push(field.replace(/\r$/, ""));
      records.push(record);
      record = [];
      field = "";
    } else {
      field += character;
    }
  }

  if (field || record.length) {
    record.push(field.replace(/\r$/, ""));
    records.push(record);
  }

  const [headers, ...rows] = records;
  if (!headers) return [];

  return rows
    .filter((row) => row.some(Boolean))
    .map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ""])));
}

function parseHevyTimestamp(value: string) {
  const match = value.match(/^(\d{1,2}) ([A-Z][a-z]{2}) (\d{4}), (\d{2}):(\d{2})$/);
  if (!match) return 0;

  const [, day, month, year, hour, minute] = match;
  return Date.UTC(Number(year), MONTHS[month], Number(day), Number(hour), Number(minute));
}

function groupWorkouts(rows: CsvRow[]) {
  const sessions = new Map<string, WorkoutSession>();
  const exerciseMaps = new Map<string, Map<string, WorkoutExercise>>();

  rows.forEach((row) => {
    const sessionKey = `${row.start_time}\u0000${row.end_time}`;
    let session = sessions.get(sessionKey);

    if (!session) {
      session = {
        title: row.title,
        startTime: row.start_time,
        endTime: row.end_time,
        description: row.description,
        exercises: [],
      };
      sessions.set(sessionKey, session);
      exerciseMaps.set(sessionKey, new Map());
    }

    const exercises = exerciseMaps.get(sessionKey)!;
    let exercise = exercises.get(row.exercise_title);

    if (!exercise) {
      exercise = { name: row.exercise_title, sets: [] };
      exercises.set(row.exercise_title, exercise);
      session.exercises.push(exercise);
    }

    exercise.sets.push({
      type: row.set_type,
      weightLbs: row.weight_lbs === "" ? null : Number(row.weight_lbs),
      reps: Number(row.reps),
    });
  });

  return Array.from(sessions.values()).sort(
    (left, right) => parseHevyTimestamp(right.startTime) - parseHevyTimestamp(left.startTime),
  );
}

export async function getRecentWorkouts(limit = 10): Promise<WorkoutSession[]> {
  const csvPath = path.join(process.cwd(), "app", "data", "workout_data.csv");
  const csv = await readFile(csvPath, "utf8");
  return groupWorkouts(parseCsv(csv)).slice(0, limit);
}
