import React from "react";
import { useTodo } from "../context/Todocontext";

function handleSubmit() {
  preventDefault();
}

const Form = () => {
  return (
    <div className="mb-4 p-4">
      <form className="flex items-center space-x-4 w-full text-black">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-md"
          placeholder="Enter your TODO Here"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-md"
          onSubmit={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
