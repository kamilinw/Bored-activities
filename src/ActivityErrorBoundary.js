import { ErrorBoundary } from "react-error-boundary";
import ErrorFetchingActivity from "./ErrorFetchingActivity";

const ActivityErrorBoundary = (props) => {
  console.log("There was an error!!!!!");
  return <ErrorBoundary FallbackComponent={ErrorFetchingActivity} {...props} />;
};

export default ActivityErrorBoundary;
