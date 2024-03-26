// import { useReducer } from "react";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// type Action =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number };

// const TodoReducer = (state: Todo[], action: Action) => {};

// const Reducer = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
// };
