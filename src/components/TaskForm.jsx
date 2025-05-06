/**
 * Componente TaskForm
 * 
 * Este componente proporciona un formulario para crear nuevas tareas. Contiene campos
 * para el título y la descripción de la tarea. Cuando el usuario envía el formulario, 
 * se crea una nueva tarea utilizando la función `createTask` del contexto `TaskContext`.
 * 
 * Dependencias:
 * - `useState`: Hook de React para gestionar el estado del formulario.
 * - `useContext`: Hook de React para acceder al contexto `TaskContext` y la función `createTask`.
 * - `TaskContext`: Contexto que proporciona la lógica para crear nuevas tareas.
 * 
 * Funcionalidad:
 * - Maneja los cambios en los campos de entrada (`title` y `description`) a través del estado local.
 * - Llama a `createTask` cuando se envía el formulario, pasando el título y la descripción de la tarea.
 * - Resetea los campos del formulario después de crear la tarea.
 * 
 * Estilos:
 * - Usa clases de Tailwind CSS para estilizar el formulario y sus elementos.
 * 
 * Props:
 * - Este componente no recibe props directos, ya que maneja la creación de tareas a través de un contexto.
 */

import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  // Estado local para gestionar el título y la descripción de la tarea
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  // Obtiene la función createTask del contexto TaskContext
  const { createTask } = useContext(TaskContext);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de página)
    
    // Llama a createTask con el título y la descripción de la tarea
    createTask({ title, description });

    // Resetea los campos del formulario
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        {/* Título del formulario */}
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>

        {/* Campo de entrada para el título de la tarea */}
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value); // Actualiza el estado del título
          }}
          value={title} // El valor del input está vinculado al estado
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus // El foco se coloca automáticamente en este campo cuando se carga el componente
        />

        {/* Campo de texto para la descripción de la tarea */}
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)} // Actualiza el estado de la descripción
          value={description} // El valor del textarea está vinculado al estado
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>

        {/* Botón para enviar el formulario */}
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
