function ErrorFetchingActivity({ message }) {
  return (
    <div className="error" role="alert">
      <p>{message}</p>
    </div>
  );
}

export default ErrorFetchingActivity;
