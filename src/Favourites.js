import { useEffect, useState } from "react";
import ActivityView from "./ActivityView";
import { getKeysFromLocalStorage } from "./LocalStorage";

const Favourites = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(
      getKeysFromLocalStorage().map((key) =>
        JSON.parse(window.localStorage.getItem(key))
      )
    );
  }, []);

  const setIsLiked = (isLiked, activity) => {
    if (!isLiked) {
      const index = activities.indexOf(activity);
      const newActiviyies = [...activities];
      newActiviyies.splice(index, 1);
      setActivities(newActiviyies);
    }
  };

  return (
    <div className="favourites">
      {activities.map((activity) => (
        <ActivityView
          key={activity.key}
          activityObject={activity}
          setIsLiked={setIsLiked}
        />
      ))}
    </div>
  );
};

export default Favourites;
