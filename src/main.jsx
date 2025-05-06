/**
 * Punto de entrada de la aplicación
 * 
 * Este archivo es el punto de entrada principal de la aplicación. Utiliza React para renderizar la
 * estructura del componente, y establece el contexto necesario para gestionar las tareas a través
 * del `TaskContextProvider`. Envuelve el componente principal `App` dentro de un `TaskContextProvider`
 * para asegurar que todos los componentes hijos puedan acceder al contexto de tareas.
 * 
 * Dependencias:
 * - `StrictMode`: Modo estricto de React que ayuda a detectar problemas potenciales en el código.
 * - `createRoot`: API para renderizar la aplicación en el contenedor raíz.
 * - `TaskContextProvider`: Proveedor del contexto de tareas que ofrece las funciones y el estado de tareas.
 * - `App`: Componente principal que renderiza la interfaz de la aplicación.
 * - `index.css`: Archivo de estilo global para la aplicación.
 * 
 * Funcionalidad:
 * - El `StrictMode` envuelve la aplicación para detectar problemas durante el desarrollo.
 * - El `TaskContextProvider` proporciona el contexto necesario para gestionar las tareas en toda la aplicación.
 * - `createRoot` se encarga de renderizar el componente `App` en el contenedor `root` del HTML.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'; // Importa los estilos globales
import App from "./App.jsx"; // Componente principal de la aplicación
import { TaskContextProvider } from "./context/TaskContext.jsx"; // Importa el contexto para tareas

// Crea la raíz de la aplicación y renderiza el componente principal
createRoot(document.getElementById("root")).render(
  <StrictMode> {/* Habilita el modo estricto de React para detección de problemas */}
    {/* Envuelve la aplicación con el TaskContextProvider para proporcionar el contexto de tareas */}
    <TaskContextProvider>
      <App /> {/* Componente principal de la aplicación */}
    </TaskContextProvider>
  </StrictMode>
);
