import { Link } from "react-router-dom";
export default function Page404() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">Return to Home Page</Link>
    </div>
  );
}
