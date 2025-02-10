import { useState, useEffect } from "react";
import "./App.css";
import { Form, Item } from "./components";
import { TodoProvider, useTodo, TodoContext } from "./context/Todocontext";

function App() {
  const [todos, setTodos] = useState(() => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  });

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo } : prevTodo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  return (
    <TodoProvider
      value={{ todos, addTodo, toggleComplete, deleteTodo, updateTodo }}
    >
      <div className="min-h-screen min-w-screen py-8">
        <div className="w-full max-w-2xl mx-auto p-4 bg-yellow-300 rounded shadow-md">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 text-blue-400">
            Todo App
          </h1>
          <div className="p-4 rounded-md mb-4">
            <Form addTodo={addTodo} />
          </div>

          <div className="p-4 rounded-md mb-4 text-black">
            {todos.map((todo) => (
              <div key={todo.id} todo={todo}>
                <Item todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
