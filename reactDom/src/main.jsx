import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import {
  Header,
  Footer,
  Homepage,
  About,
  Services,
  Contact,
} from "../components/index";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./index.css";
import App from "./App.jsx";

// One way of creating a BrowserRouter
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Homepage />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//     ],
//   },
// ]);

//2nd type of creating a BrowserRouter :-
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />}>
        <Route path="mobile" element={<h1>74878489468</h1>} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
