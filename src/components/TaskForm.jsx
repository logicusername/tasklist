//creacioninputs asignacion de sets captura eventos y envio a createTask

import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//le paso una funcion para que la ejecute

export function TaskForm() {
  const [title, setTitle] = useState(""); //inicio el title
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  const [errort, setErrort] = useState(false);
  const [errord, setErrord] = useState(false);
  const [buttonactive, setbuttonactive] = useState(false);

  const handleSubmit = (e) => {
    //en el submit niegue el reenvio y muestre por consola
    e.preventDefault();
    // if(title.length==0||description.length==0){
    //   setErrir(true)
    // }
    createTask({ title, description }); //ejecuta esa funcion con el nuevo objeto
    setTitle("");
    setDescription("");
    setbuttonactive(false);
    setErrord("");
    setErrord("");
  };
  const handleOnblurt = () => {
    if (title.length == 0) setErrort(true);
    else {
      console.log("");
    }
  };
  const handleOnblurd = () => {
    if (description.length == 0) setErrord(true);
    else {
      console.log("");
    }

    if (title.length <= 0 && description.length <= 0) {
      setbuttonactive(false);
    } else {
      setbuttonactive(true);
    }
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        {" "}
        {/*ejecucion handle y bloqueo reenvio formulario*/}
        <h1 className="text-2xl font-bold text-white mb-3 ">crea tu tarea</h1>
        <input
          placeholder="escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
          onBlur={handleOnblurt}
        >
          {/*capturarevento e yasignarlotitle*/}
        </input>
        {errort && title.length <= 0 ? (
          <label className="text-white font-bold text-sm">no puede dejar vacio este campo</label>
        ) : (
          ""
        )}
        <textarea
          placeholder="escribe descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          onBlur={handleOnblurd}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        {errord && title.length <= 0 ? (
          <label className="text-white font-bold text-sm">no puede dejar vacio este campo</label>
        ) : (
          ""
        )}
        <button disabled={!buttonactive} className="bg-indigo-500 px-3 py-1 text-white">guardar</button>
      </form>
    </div>
  );
}
