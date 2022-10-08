const ActivityForm = ({ onSubmit }) => {
  return (
    <div className="activity-form">
      <button onClick={() => onSubmit("")}>Search for activity</button>
    </div>
  );
};

export default ActivityForm;
