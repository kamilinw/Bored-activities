function ErrorFetchingActivity({ message }) {
  return (
    <section className="activity-error" role="alert">
      <p>{message}</p>
    </section>
  );
}

export default ErrorFetchingActivity;
