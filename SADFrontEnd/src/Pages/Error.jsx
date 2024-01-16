import { Link, useRouterError } from "react-router-dom";
const Error = () => {
  const error = useRouterError();
  console.log(error);
  return (
    <div>
      <h2>Error page</h2>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default Error;
