import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// recorro arreglo y hago nueva lista de tareas 
import TaskCard from "./TaskCard";

function TaskList() {
   const {tasks} = useContext(TaskContext)
 
  if (tasks.length === 0){// si.length es igual a cero entonces no hay tareas x                      
    return<h1 className="text-white text-4xl font-bold text-center"> no hay tareas disponibles</h1>
  }
  return ( //recorre el task y hago un nuevo arreglo retornando lo que quiero mostrar
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
      <TaskCard key = {task.id} task = {task}/>))}
    </div>
  );
}

export default TaskList;