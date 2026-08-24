import WorkContent from "../../components/workContent";
import { getRecentWorkouts } from "../data/workouts";

export default async function Work() {
  const workouts = await getRecentWorkouts(5);

  return <WorkContent workouts={workouts} />;
}
