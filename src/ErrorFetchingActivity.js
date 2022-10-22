function ErrorFetchingActivity({ message }) {
  return (
    <section className="error" role="alert">
      <p>{message}</p>
    </section>
  );
}

export default ErrorFetchingActivity;
