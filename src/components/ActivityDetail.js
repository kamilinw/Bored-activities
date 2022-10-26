import { Progress } from "antd";
//import "antd/dist/antd.css";

const ActivityDetail = ({ name, value }) => {
  return (
    <li>
      <p>{name}:</p>
      {name == "type" || name == "participants" ? (
        <p>{value}</p>
      ) : (
        <Progress
          percent={value * 100}
          showInfo={false}
          status={value === 1 ? "exception" : ""}
        />
      )}
    </li>
  );
};

export default ActivityDetail;
