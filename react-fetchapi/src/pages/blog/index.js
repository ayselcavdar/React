import { Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div>
      <h3>Blog Page</h3>

      <Outlet />
    </div>
  );
}
