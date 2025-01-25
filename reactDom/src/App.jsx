import { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Header, Footer, Homepage } from "../components/index";
import { Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
