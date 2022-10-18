import React from "react";

class ActivityErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    console.log("Error!!!!");
    console.log(errorInfo);
    if (hasError) {
      return <this.props.FallbackComponent message={error.toString()} />;
    }

    return this.props.children;
  }
}
export default ActivityErrorBoundary;
