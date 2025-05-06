/**
 * Componente TaskCard
 * 
 * Este componente recibe una tarea como propiedad (`task`) y la muestra en una tarjeta con
 * su título y descripción. También permite eliminar la tarea mediante el uso de un contexto
 * que proporciona la función `deleteTask`.
 * 
 * Dependencias:
 * - `useContext`: Hook de React para acceder a valores dentro de un contexto.
 * - `TaskContext`: Contexto que contiene la lógica para eliminar tareas.
 * 
 * Props:
 * - `task`: Un objeto que representa una tarea, que contiene al menos las propiedades `id`, `title` y `description`.
 * 
 * Funcionalidad:
 * - Muestra el título y la descripción de la tarea.
 * - Proporciona un botón para eliminar la tarea, lo que dispara la función `deleteTask` pasando el `task.id`.
 * 
 * Estilos:
 * - Usa clases de Tailwind CSS para aplicar estilos básicos (colores, márgenes, bordes redondeados).
 */

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  // Accede al contexto TaskContext y extrae la función deleteTask
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      {/* Muestra el título de la tarea */}
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      
      {/* Muestra la descripción de la tarea */}
      <p className="text-gray-500 text-sm">{task.description}</p>
      
      {/* Botón para eliminar la tarea */}
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)} // Llama a deleteTask con el ID de la tarea
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
