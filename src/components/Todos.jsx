import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Features/Todo/TodoSlice";
// const todos = useSelector((state) => state.todos);
export default function Todos() {
  const todolist = useSelector((state) => state.todos);
  console.log(todolist);
  const dispatch = useDispatch();

  const removeTodoButton = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      {todolist.map((todo, index) => (
        <div className="w-full max-w-sm" key={todo.id}>
          <div className="flex items-center border-b border-teal-500 py-2">
            <div className="text-white appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
              {todo.text}
            </div>
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={() => removeTodoButton(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
