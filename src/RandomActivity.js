import ActivityForm from "./ActivityForm";
import ActivityView from "./ActivityView";
import { useCallback, useEffect, useState } from "react";
import ActivityErrorBoundary from "./ActivityErrorBoundary";
import ErrorFetchingActivity from "./ErrorFetchingActivity";

const RandomActivity = () => {
  const [activity, setActivity] = useState({ error: "loading" });

  const requestActivity = useCallback((data = "") => {
    fetch("http://www.boredapi.com/api/activity/?" + data)
      .then((response) => response.json())
      .then(
        (json) => {
          console.log(json);
          let isLiked = false;
          if (json.key) {
            const localStorageActivity = JSON.parse(
              window.localStorage.getItem(json.key)
            );
            isLiked = localStorageActivity?.isLiked;
          }
          setActivity({ ...json, isLiked });
        },
        (error) => {
          setActivity({ error: error.message });
        }
      );
  }, []);

  useEffect(() => {
    requestActivity();
  }, [requestActivity]);

  const onSubmitForm = (data) => {
    requestActivity(data);
  };

  return (
    <main className="rand-act">
      <ActivityForm onSubmit={onSubmitForm} />
      <ActivityView
        activityObject={activity}
        setIsLiked={(isLiked) => setActivity({ ...activity, isLiked })}
      />
    </main>
  );
};

const WrappedRandomActivity = () => {
  return (
    <ActivityErrorBoundary FallbackComponent={ErrorFetchingActivity}>
      <RandomActivity />
    </ActivityErrorBoundary>
  );
};

export default WrappedRandomActivity;
