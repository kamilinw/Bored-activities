import ActivityDetail from "./ActivityDetail";
import ErrorFetchingActivity from "./ErrorFetchingActivity";

const ActivityView = ({ activityObject }) => {
  if (activityObject.error) {
    return <ErrorFetchingActivity message={activityObject.error} />;
  }
  const { activity, type, participants, price, link, accessibility } =
    activityObject;

  if (typeof link == "function") {
    console.log(activity);
  }
  console.log(`link: ${typeof link}`);
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
          <a href={link} className="activity_link">
            {activity}
          </a>
        ) : (
          <p className="activity">{activity}</p>
        )}
      </div>
    </div>
  );
};

export default ActivityView;
