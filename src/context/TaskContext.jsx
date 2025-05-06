/**
 * Contexto TaskContext
 * 
 * Este componente crea y proporciona un contexto para manejar las tareas en la aplicación.
 * Usa el hook `useState` para gestionar el estado de las tareas y el hook `useEffect` para 
 * inicializarlas con un conjunto de datos predeterminado. Proporciona las funciones para 
 * crear y eliminar tareas a través del contexto `TaskContext`.
 * 
 * Dependencias:
 * - `createContext`: Función de React para crear un contexto que se puede compartir entre componentes.
 * - `useState`: Hook de React para gestionar el estado local de las tareas.
 * - `useEffect`: Hook de React para realizar efectos secundarios, como la carga inicial de datos.
 * - `tasks` (importado desde `../data/tasks`): Datos iniciales que simulan un conjunto de tareas.
 * 
 * Funcionalidad:
 * - El estado `tasks` mantiene la lista actual de tareas.
 * - La función `createTask` permite agregar nuevas tareas al estado.
 * - La función `deleteTask` permite eliminar una tarea de la lista mediante su `id`.
 * - El hook `useEffect` se utiliza para cargar las tareas iniciales al montar el componente.
 * 
 * Proveedor:
 * - Este contexto envuelve a otros componentes en la aplicación y proporciona acceso a las tareas,
 *   así como las funciones `createTask` y `deleteTask` a través del `TaskContext.Provider`.
 * 
 * Props:
 * - `props.children`: Cualquier componente hijo que esté envuelto dentro de `TaskContextProvider`
 *   recibirá el contexto de tareas.
 */

import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

// Crea el contexto de tareas
export const TaskContext = createContext();

// Componente proveedor del contexto de tareas
export function TaskContextProvider(props) {
  // Estado para almacenar las tareas
  const [tasks, setTasks] = useState([]);

  /**
   * Función para crear una nueva tarea.
   * 
   * @param {Object} task - Un objeto que contiene el título y la descripción de la tarea.
   * Agrega la nueva tarea al estado `tasks`.
   */
  function createTask(task) {
    setTasks([
      ...tasks, // Conserva las tareas anteriores
      {
        title: task.title,
        id: tasks.length, // Asigna un ID basado en la longitud de las tareas
        description: task.description,
      },
    ]);
  }

  /**
   * Función para eliminar una tarea por su ID.
   * 
   * @param {number} taskId - El ID de la tarea que se desea eliminar.
   * Elimina la tarea correspondiente del estado `tasks`.
   */
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId)); // Filtra la tarea a eliminar
  }

  // Carga las tareas iniciales cuando el componente se monta
  useEffect(() => {
    setTasks(data); // Inicializa el estado con los datos de tareas importados
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <TaskContext.Provider
      value={{
        tasks, // Proporciona las tareas actuales
        deleteTask, // Función para eliminar tareas
        createTask, // Función para crear nuevas tareas
      }}
    >
      {props.children} {/* Permite que los componentes hijos accedan al contexto */}
    </TaskContext.Provider>
  );
}
