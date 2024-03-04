import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../Features/Todo/TodoSlice";

export default function AddTodos() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <label
        htmlFor="email-address-icon"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your Todo
      </label>
      <form className="flex mx-auto " onSubmit={addTodoHandler}>
        <div className="relative">
          <input
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="mytodo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}
