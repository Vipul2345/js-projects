import { useState } from "react";
import "./App.css";
import { Form, Item } from "./components";

function App() {
  return (
    <>
      <div className="min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto p-4 bg-black-100 rounded shadow-md text-white-800">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2">Todo App</h1>
          <div>
            <Form />
          </div>

          <div>
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
