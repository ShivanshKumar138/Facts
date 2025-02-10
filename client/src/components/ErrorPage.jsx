import { useRouteError } from "react-router-dom";
function ErrorPage() {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>{err.data}</h1>
      <h1>{err.status}</h1>
    </>
  );
}

export default ErrorPage;
