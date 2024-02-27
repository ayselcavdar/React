import { memo } from "react";
import TodoItems from "./TodoItem";

function Todos({ todos }) {
  console.log("todos rendered");
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItems todo={todo} key={index} />
      ))}
    </ul>
  );
}

export default memo(Todos);
