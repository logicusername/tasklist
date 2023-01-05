import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskContextProvider } from "./context/TaskContext";
import "./index.css";


const seleccion = document.getElementById("root");
const root = ReactDOM.createRoot(seleccion);

root.render(
  <>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </>
);
