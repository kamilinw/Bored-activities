import ActivityForm from "./ActivityForm";
import ActivityView from "./ActivityView";
import { useCallback, useEffect, useState } from "react";

const RandomActivity = () => {
  const [activity, setActivity] = useState("");

  const requestActivity = useCallback(async (data = "") => {
    const res = await fetch("http://www.boredapi.com/api/activity/?" + data);
    const json = await res.json();
    setActivity(json);
  }, []);

  useEffect(() => {
    requestActivity();
  }, [requestActivity]);

  const onSubmitForm = (data) => {
    requestActivity(data);
  };

  return (
    <div className="rand-act">
      <ActivityForm onSubmit={onSubmitForm} />
      <ActivityView activityObject={activity} />
    </div>
  );
};

export default RandomActivity;
