import { useContext } from "react";
import { TodosContext } from "../context/TodoContext";

/**
 * Hook que encapsula el acceso a los datos de Todos
 * y las operaciones de agregado, eliminación y filtrado
 * disponibles para los mismos 
 * @returns {ReturnType<useContext<TodosContext>}
 */
export const useTodos = () => useContext(TodosContext);