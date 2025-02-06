import React from "react";

const Item = ({ todo }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 my-2 rounded-md">
      <div>
        <input type="checkbox" />
        <span className="ml-2">{todo.todo}</span>
      </div>
      <div>
        <button className="bg-red-500 text-white px-2 py-1 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
