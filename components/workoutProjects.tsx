"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faClock,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import type { WorkoutSession } from "../app/data/workouts";

const getTime = (dateTime: string) => dateTime.split(", ")[1];
const getDate = (dateTime: string) => dateTime.split(", ")[0];

function getDuration(startTime: string, endTime: string) {
  const [startHour, startMinute] = getTime(startTime).split(":").map(Number);
  const [endHour, endMinute] = getTime(endTime).split(":").map(Number);
  const minutes = endHour * 60 + endMinute - (startHour * 60 + startMinute);
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;

  return hours ? `${hours}h ${remainder}m` : `${remainder}m`;
}

export default function WorkoutProjects({ workouts }: { workouts: WorkoutSession[] }) {
  const [activeWorkout, setActiveWorkout] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const workout = workouts[activeWorkout];

  const showWorkout = (index: number) => {
    setDirection(index > activeWorkout ? "next" : "previous");
    setActiveWorkout(index);
  };

  const showPrevious = () => {
    setDirection("previous");
    setActiveWorkout((current) => (current - 1 + workouts.length) % workouts.length);
  };

  const showNext = () => {
    setDirection("next");
    setActiveWorkout((current) => (current + 1) % workouts.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setDirection("previous");
        setActiveWorkout((current) => (current - 1 + workouts.length) % workouts.length);
      }
      if (event.key === "ArrowRight") {
        setDirection("next");
        setActiveWorkout((current) => (current + 1) % workouts.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [workouts.length]);

  return (
    <div className="my-12 w-screen px-4 md:px-12 lg:px-40 font-poppins">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-offPrimary shadow-2xl shadow-black/20">
        <div className="relative overflow-hidden border-b border-white/10 px-5 py-7 md:px-9 md:py-9">
          <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                <FontAwesomeIcon icon={faDumbbell} className="h-4 w-4" />
                Recent workouts
              </div>
              <h2 className="text-4xl font-black tracking-wide text-white md:text-5xl">{workout.title}</h2>
              <p className="mt-2 text-sm text-gray-300 md:text-base">
                {getDate(workout.startTime)}
              </p>
              {workout.description && (
                <p className="mt-3 max-w-xl text-sm italic text-gray-400">“{workout.description}”</p>
              )}
            </div>
            <div className="flex gap-3 text-sm text-gray-300">
              <span className="rounded-full bg-white/5 px-3 py-2">
                {workout.exercises.length} exercises
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <FontAwesomeIcon icon={faClock} className="h-3.5 w-3.5 text-secondary" />
                {getDuration(workout.startTime, workout.endTime)}
              </span>
            </div>
          </div>
        </div>

        <div
          key={activeWorkout}
          className={`grid gap-3 p-4 md:grid-cols-2 md:p-7 ${
            direction === "next" ? "animate-workout-next" : "animate-workout-previous"
          }`}
        >
          {workout.exercises.map((exercise) => {
            let workingSetNumber = 0;

            return (
              <div key={exercise.name} className="overflow-hidden rounded-2xl border border-white/10 bg-primary/70">
                <h3 className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-white md:text-base">
                  {exercise.name}
                </h3>
                <div className="grid grid-cols-[3.25rem_1fr_1fr] px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-widest text-gray-500">
                  <span>Set</span>
                  <span className="text-right">Weight</span>
                  <span className="text-right">Reps</span>
                </div>
                {exercise.sets.map((set, setIndex) => {
                  if (set.type !== "warmup") workingSetNumber += 1;

                  return (
                    <div
                      key={`${exercise.name}-${setIndex}`}
                      className="grid grid-cols-[3.25rem_1fr_1fr] items-center border-t border-white/5 px-4 py-2.5 text-sm"
                    >
                      <span
                        className={
                          set.type === "warmup"
                            ? "flex h-6 w-6 items-center justify-center rounded-md bg-amber-400/15 font-bold text-amber-400"
                            : "font-semibold text-gray-300"
                        }
                        title={set.type === "warmup" ? "Warm-up set" : `Working set ${workingSetNumber}`}
                      >
                        {set.type === "warmup" ? "W" : workingSetNumber}
                      </span>
                      <span className="text-right font-medium text-gray-200">
                        {set.weightLbs === null ? "Bodyweight" : `${set.weightLbs} lb`}
                      </span>
                      <span className="text-right font-medium text-gray-200">{set.reps}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-4 py-4 md:px-7">
          <button
            type="button"
            onClick={showPrevious}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-gray-300 transition-colors hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Show previous workout"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2" aria-label={`Workout ${activeWorkout + 1} of ${workouts.length}`}>
            {workouts.map((session, index) => (
              <button
                type="button"
                key={`${session.startTime}-${session.title}`}
                onClick={() => showWorkout(index)}
                className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary ${
                  index === activeWorkout ? "w-7 bg-secondary" : "w-2.5 bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Show workout ${index + 1}: ${session.title} on ${getDate(session.startTime)}`}
                aria-current={index === activeWorkout ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={showNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-gray-300 transition-colors hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Show next workout"
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-gray-500">Use the arrows or your keyboard to move through the last five sessions.</p>
    </div>
  );
}
