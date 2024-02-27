import { memo } from "react";
function TodoItems({ index, todo }) {
  console.log("TodoItems rendered", todo);
  return <li key={index}>{todo}</li>;
}
export default memo(TodoItems);
