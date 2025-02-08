import { useState } from "react";
import "./App.css";
import { Form, Item } from "./components";

function App() {
  return (
    <>
      <div className="min-h-screen min-w-screen py-8">
        <div className="w-full max-w-2xl mx-auto p-4 bg-yellow-300 rounded shadow-md">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 text-blue-400">
            Todo App
          </h1>
          <div className="p-4 rounded-md mb-4">
            <Form />
          </div>

          <div className="p-4 rounded-md mb-4">
            <Item
              todo={{ id: 1, todo: "Todo MessageChannel", completed: false }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
