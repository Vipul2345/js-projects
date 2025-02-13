import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/firstSlice.js";

const Form = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add a New Todo</h2>
        <form className="space-y-4" onSubmit={add}>
          <input
            type="text"
            className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-6 transition-colors duration-200 ease-in-out"
            placeholder="Enter your TODO Here"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
