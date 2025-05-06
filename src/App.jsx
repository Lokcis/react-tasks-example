/**
 * Componente App
 * 
 * Este es el componente principal de la aplicación. Se encarga de renderizar la interfaz de usuario
 * que permite agregar nuevas tareas y mostrar la lista de tareas. Incluye los componentes `TaskForm`
 * para crear tareas y `TaskList` para mostrar las tareas existentes.
 * 
 * Estilos:
 * - Utiliza clases de Tailwind CSS para estilizar el fondo, el contenedor y el espaciado de los elementos.
 * 
 * Funcionalidad:
 * - Renderiza el formulario de tareas (`TaskForm`), donde el usuario puede ingresar y guardar nuevas tareas.
 * - Renderiza la lista de tareas (`TaskList`), donde se muestran todas las tareas disponibles.
 * 
 * Props:
 * - Este componente no recibe props directas.
 */

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen"> {/* Fondo oscuro para la aplicación */}
      <div className="container mx-auto p-10"> {/* Contenedor centrado con padding */}
        <TaskForm /> {/* Componente para crear nuevas tareas */}
        <TaskList /> {/* Componente para mostrar la lista de tareas */}
      </div>
    </main>
  );
}

export default App;
