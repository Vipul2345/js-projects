import React, { useState } from "react";
import { useTodo } from "../context/Todocontext";

const Form = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({
      todo,
      completed: false,
    });
    setTodo("");
  };
  return (
    <div className="mb-4 p-4">
      <form
        className="flex items-center space-x-4 w-full text-black"
        onSubmit={add}
      >
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-md"
          placeholder="Enter your TODO Here"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
