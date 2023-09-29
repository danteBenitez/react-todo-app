import { useContext } from "react";
import { TodosContext } from "../context/TodoContext";

export const useTodos = () => useContext(TodosContext);