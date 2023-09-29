import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const { 
      showAll,
      showActive,
      showCompleted,
      clearCompleted
    } = useTodos();


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
          <button className="btn btn-sm btn-primary" onClick={() => showAll()}>All</button>
          <button className="btn btn-sm btn-success" onClick={() => showActive()}>Active</button>
          <button className="btn btn-sm btn-danger" onClick={() => showCompleted()}>Completed</button>
          <button className="btn btn-sm btn-warning" onClick={() => clearCompleted()}>Clear Completed</button>
        </div>
      </div>

      <div className="row mb-3">
          <AddTodo />
          <TodoList />
      </div>
    </div>
  );
};
