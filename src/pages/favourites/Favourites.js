import { useEffect, useState } from "react";
import ActivityView from "../random_activity/ActivityView";
import { getKeysFromLocalStorage } from "../../utils/LocalStorage";
import NoFavourites from "./NoFavourites";

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
    <main className="favourites">
      {activities.length ? (
        activities.map((activity) => (
          <ActivityView
            key={activity.key}
            activityObject={activity}
            setIsLiked={setIsLiked}
          />
        ))
      ) : (
        <NoFavourites />
      )}
    </main>
  );
};

export default Favourites;
