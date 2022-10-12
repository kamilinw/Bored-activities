import ActivityForm from "./ActivityForm";
import ActivityView from "./ActivityView";
import { useCallback, useEffect, useState } from "react";

const RandomActivity = () => {
  const [activity, setActivity] = useState("");

  const requestActivity = useCallback(async (data = "") => {
    const res = await fetch("http://www.boredapi.com/api/activity/?" + data);
    const json = await res.json();

    let isLiked = false;
    if (json.key) {
      const localStorageActivity = JSON.parse(
        window.localStorage.getItem(json.key)
      );
      isLiked = localStorageActivity?.isLiked;
    }

    setActivity({ ...json, isLiked });
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
      <ActivityView
        activityObject={activity}
        setIsLiked={(isLiked) => setActivity({ ...activity, isLiked })}
      />
    </div>
  );
};

export default RandomActivity;
