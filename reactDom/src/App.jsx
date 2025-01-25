import { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Header, Footer, Homepage } from "../components/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-blue-400 p-4">
        <Header />
        <Homepage />
        <p className="bg-red-400 ">This Is my screen</p>
        <Footer />
      </div>
    </>
  );
}
export default App;
