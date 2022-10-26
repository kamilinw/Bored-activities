import ActivityDetail from "./ActivityDetail";
import ErrorFetchingActivity from "./ErrorFetchingActivity";
import {
  HeartFilled,
  HeartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
//import "antd/dist/antd.css";
import LocalStorage from "../utils/LocalStorage";

const ActivityView = ({ activityObject, setIsLiked }) => {
  if (activityObject.error) {
    return <ErrorFetchingActivity message={activityObject.error} />;
  }
  const {
    activity,
    type,
    participants,
    price,
    key,
    link,
    accessibility,
    isLiked,
  } = activityObject;

  const likeButtonOnClick = (activityLiked) => {
    if (activityLiked) {
      let localStorageKeys = LocalStorage.getKeysFromLocalStorage();
      localStorageKeys = [...localStorageKeys, key];
      LocalStorage.saveKeysToLocalStorage(localStorageKeys);
      window.localStorage.setItem(
        key,
        JSON.stringify({ ...activityObject, isLiked: activityLiked })
      );
    } else {
      let localStorageKeys = LocalStorage.getKeysFromLocalStorage();
      const keyIndex = localStorageKeys.indexOf(key);
      if (keyIndex >= 0) {
        localStorageKeys.splice(keyIndex, 1);
      }
      LocalStorage.saveKeysToLocalStorage(localStorageKeys);
      window.localStorage.removeItem(key);
    }
    setIsLiked(activityLiked, activityObject);
  };

  return (
    <section className="activity-view">
      <div className="activity-details">
        <ul>
          <ActivityDetail name="type" value={type} />
          <ActivityDetail name="participants" value={participants} />
          <ActivityDetail name="price" value={price} />
          <ActivityDetail name="accessibility" value={accessibility} />
        </ul>
      </div>
      <div className="activity-text">
        {typeof link != "function" && link.length > 0 ? (
          <QuestionCircleOutlined
            tabIndex="0"
            id="information"
            onClick={() => window.open(link)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                window.open(link);
              }
            }}
          />
        ) : (
          ""
        )}
        <p className="activity" data-testid="activity_description">
          {activity}
        </p>
        {isLiked ? (
          <HeartFilled
            tabIndex="0"
            id="heart"
            style={{ color: "#eb2f96" }}
            onClick={() => likeButtonOnClick(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                likeButtonOnClick(false);
              }
            }}
          />
        ) : (
          <HeartOutlined
            tabIndex="0"
            id="heart"
            style={{ color: "#eb2f96" }}
            onClick={() => likeButtonOnClick(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                likeButtonOnClick(true);
              }
            }}
          />
        )}
      </div>
    </section>
  );
};

export default ActivityView;
