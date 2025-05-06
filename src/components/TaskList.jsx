/**
 * Componente TaskList
 * 
 * Este componente se encarga de mostrar la lista de tareas. Utiliza el contexto `TaskContext`
 * para obtener las tareas disponibles y las muestra usando el componente `TaskCard`. Si no hay
 * tareas, muestra un mensaje indicándolo.
 * 
 * Dependencias:
 * - `useContext`: Hook de React para acceder al contexto `TaskContext` y obtener las tareas.
 * - `TaskContext`: Contexto que contiene las tareas y otras funciones relacionadas con ellas.
 * - `TaskCard`: Componente encargado de mostrar los detalles de cada tarea.
 * 
 * Funcionalidad:
 * - Verifica si hay tareas disponibles. Si no las hay, muestra un mensaje de "No hay tareas aún".
 * - Si hay tareas, las mapea y renderiza un `TaskCard` por cada tarea.
 * 
 * Estilos:
 * - Utiliza clases de Tailwind CSS para aplicar estilos en la disposición de la lista de tareas.
 * 
 * Props:
 * - Este componente no recibe props directamente; obtiene las tareas desde el contexto.
 */

import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  // Obtiene las tareas desde el contexto TaskContext
  const { tasks } = useContext(TaskContext);

  // Si no hay tareas, muestra un mensaje indicando que no hay tareas aún
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {/* Mapea las tareas y renderiza un TaskCard por cada tarea */}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
