import { Link } from "react-router-dom";
export default function Blog404() {
  return (
    <div>
      <h1> Blog Page not found</h1>
      <Link to="/blog">Return to Blog Page</Link>
    </div>
  );
}
