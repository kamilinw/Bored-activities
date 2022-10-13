import ActivityDetail from "./ActivityDetail";
import ErrorFetchingActivity from "./ErrorFetchingActivity";
import {
  HeartFilled,
  HeartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import {
  getKeysFromLocalStorage,
  saveKeysToLocalStorage,
} from "./LocalStorage";

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
      let localStorageKeys = getKeysFromLocalStorage();
      localStorageKeys = [...localStorageKeys, key];
      saveKeysToLocalStorage(localStorageKeys);
      window.localStorage.setItem(
        key,
        JSON.stringify({ ...activityObject, isLiked: activityLiked })
      );
    } else {
      let localStorageKeys = getKeysFromLocalStorage();
      const keyIndex = localStorageKeys.indexOf(key);
      if (keyIndex >= 0) {
        localStorageKeys.splice(keyIndex, 1);
      }
      saveKeysToLocalStorage(localStorageKeys);
      window.localStorage.removeItem(key);
    }
    setIsLiked(activityLiked, activityObject);
  };

  return (
    <div className="activity-view">
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
            id="information"
            onClick={() => window.open(link)}
          />
        ) : (
          ""
        )}
        <p className="activity">{activity}</p>
        {isLiked ? (
          <HeartFilled
            id="heart"
            style={{ color: "#eb2f96" }}
            onClick={() => likeButtonOnClick(false)}
          />
        ) : (
          <HeartOutlined
            id="heart"
            style={{ color: "#eb2f96" }}
            onClick={() => likeButtonOnClick(true)}
          />
        )}
      </div>
    </div>
  );
};

export default ActivityView;
