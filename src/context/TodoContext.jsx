import { useState } from "react";
import { createContext } from "react";

export const TodosContext = createContext();

const TODO_FILTERS = {
  ACTIVE: "active",
  COMPLETED: "completed",
  ALL: "all",
};

export function TodosContextProvider({ children }) {
  const [allTodos, setAllTodos] = useState([]);
  const [filter, setFilter] = useState(TODO_FILTERS.ALL);

  const addTodo = (title) => {
    setAllTodos([...allTodos, {
      id: new Date().getTime(),
      title,
      completed: false
    }]);
  };

  const toggleCompleted = (id) => {
    const toggled = allTodos.map((todo) => {
      return todo.id == id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo;
    });
    setAllTodos(toggled);
  };

  const todos = allTodos.filter((todo) => {
    switch (filter) {
      case TODO_FILTERS.ALL:
        return true;
      case TODO_FILTERS.COMPLETED:
        return todo.completed;
      case TODO_FILTERS.ACTIVE:
        return !todo.completed;
    }
  });

  const showAll = () => setFilter(TODO_FILTERS.ALL);
  const showActive = () => setFilter(TODO_FILTERS.ACTIVE);
  const showCompleted = () => setFilter(TODO_FILTERS.COMPLETED);

  const clearCompleted = () => {
    const cleared = allTodos.filter(todo => {
      return !todo.completed
    });
    setAllTodos(cleared);
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        toggleCompleted,
        showAll,
        showActive,
        showCompleted,
        clearCompleted
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
