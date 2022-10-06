import ActivityForm from "./ActivityForm";
import ActivityView from "./ActivityView";
import { useEffect, useState } from "react";

const RandomActivity = () => {
  const [activity, setActivity] = useState("activity");

  useEffect(() => {
    requestActivity();
  }, []);

  async function requestActivity() {
    const res = await fetch("http://www.boredapi.com/api/activity/");
    const json = await res.json();
    setActivity(json);
  }
  return (
    <div className="rand-act">
      <ActivityForm />
      <ActivityView activityObject={activity} />
    </div>
  );
};

export default RandomActivity;
