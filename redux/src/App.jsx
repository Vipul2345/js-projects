import { useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import Item from "./components/Item.jsx";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Learn about Redux Toolkit</h1>
      <div className="w-full max-w-md space-y-8">
        <Form />
        <Item />
      </div>
    </div>
  );
}

export default App;
