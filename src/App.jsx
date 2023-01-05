
// el task form envia informacion con props para utilizarla y crear nuevas tareas.


import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import TaskCard from "./components/TaskCard";

function App() {
  return (  
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
