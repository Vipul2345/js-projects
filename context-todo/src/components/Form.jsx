import React from "react";
import { useTodo } from "../context/Todocontext";

const Form = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
