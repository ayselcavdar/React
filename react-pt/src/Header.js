import { memo } from "react";

function Header() {
  console.log("header reandererd");
  return <h1>Header</h1>;
}

export default memo(Header);
