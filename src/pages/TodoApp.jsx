import { useState } from "react";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";

export const TodoApp = () => {
  // Lógica para almacenar los todos
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: text,
        completed: false,
      },
    ]);
  };

  // Lógica para completar un todo
  const toggleCompleted = (id) => {
    const toggled = todos.map((todo) =>
      todo.id == id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );
    setTodos(toggled);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <h1>TodoApp</h1>
        </div>
      </div>

      {/* TodoFilter */}
      <div className="row mb-3">
        <div className="col d-flex gap-1">
          <button className="btn btn-sm btn-primary">All</button>
          <button className="btn btn-sm btn-success">Active</button>
          <button className="btn btn-sm btn-danger">Completed</button>
          <button className="btn btn-sm btn-warning">Clear Completed</button>
        </div>
      </div>

      {/* TodoAdd */}
      <div className="row mb-3">
        <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
          <h3>New Todo</h3>
          <AddTodo addTodo={addTodo} />
        </div>

        {/* TodoList */}
        <div className="col-sm-12 col-md-8">
          <h3>Todo List</h3>
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
};
