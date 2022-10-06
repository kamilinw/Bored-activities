const ActivityForm = ({ onSubmit }) => {
  return (
    <div className="activity-form">
      <button onClick={() => onSubmit("?type=recreational")}>
        Search for activity
      </button>
    </div>
  );
};

export default ActivityForm;
