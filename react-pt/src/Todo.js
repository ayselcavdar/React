import { useState, useReducer, useCallback, useMemo } from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function reducer(state, action) {
  console.log("app render");
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [...state.todos, action.todo],
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.value,
      };
  }
}

export default function Todo() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
    search: "",
  });

  const submitHandle = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });
    },
    [state.todo]
  );
  const onChange = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);

  const searchHandle = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };

  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) =>
      todo
        .toLocaleLowerCase("TR")
        .includes(state.search.toLocaleLowerCase("TR"))
    );
  }, [state.todos, state.search]);

  return (
    <>
      <Header />
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Arttir</button>
      <hr />
      <h1>Todos</h1>
      <input
        type="text"
        value={state.search}
        placeholder="Search in Todos"
        onChange={searchHandle}
      />
      {state.search}
      <hr />

      <AddTodo
        onChange={onChange}
        submitHandle={submitHandle}
        todo={state.todo}
      />
      <Todos todos={filteredTodos} />
    </>
  );
}
