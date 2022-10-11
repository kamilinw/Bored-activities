import ActivityDetail from "./ActivityDetail";
import ErrorFetchingActivity from "./ErrorFetchingActivity";
import {
  HeartFilled,
  HeartOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { useState } from "react";

const ActivityView = ({ activityObject }) => {
  const [activityLiked, setActivityLiked] = useState(false);

  if (activityObject.error) {
    return <ErrorFetchingActivity message={activityObject.error} />;
  }
  const { activity, type, participants, price, link, accessibility } =
    activityObject;

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
        {activityLiked ? (
          <HeartFilled
            id="heart"
            style={{ color: "#eb2f96" }}
            onClick={() => setActivityLiked(!activityLiked)}
          />
        ) : (
          <HeartOutlined
            id="heart"
            style={{ color: "#eb2f96" }}
            onClick={() => setActivityLiked(!activityLiked)}
          />
        )}
      </div>
    </div>
  );
};

export default ActivityView;
