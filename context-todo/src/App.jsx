import { useState } from "react";
import "./App.css";
import { Form, Item } from "./components";
import { TodoProvider, useTodo, TodoContext } from "./context/Todocontext";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const id = Date.now();
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  return (
    <>
      <div className="min-h-screen min-w-screen py-8">
        <div className="w-full max-w-2xl mx-auto p-4 bg-yellow-300 rounded shadow-md">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 text-blue-400">
            Todo App
          </h1>
          <div className="p-4 rounded-md mb-4">
            <Form addTodo={addTodo} />
          </div>

          <div className="p-4 rounded-md mb-4">
            <Item todo={todos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
