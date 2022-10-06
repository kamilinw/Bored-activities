const ActivityView = ({ activityObject }) => {
  const { activity } = activityObject;
  return (
    <div className="activity-view">
      <p>{activity}</p>
    </div>
  );
};

export default ActivityView;
