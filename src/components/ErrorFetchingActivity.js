function ErrorFetchingActivity({ message }) {
  return (
    <section
      className="activity-error"
      role="alert"
      data-testid="error_fetching_activity"
    >
      <p>{message}</p>
    </section>
  );
}

export default ErrorFetchingActivity;
