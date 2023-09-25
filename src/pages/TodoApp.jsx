import { useState } from "react";

export const TodoApp = () => {
  // Lógica para almacenar los todos
  const [todos, setTodos] = useState([]);

  // Lógica para añadir un todo
  // Texto del Todo a ser añadido
  const [todoText, setTodoText] = useState("");
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
  // Manejar evento onKeyCapture
  const handleKeyCapture = (evt) => {
    console.log("Presionada una tecla", evt.key);
    if (evt.key == "Enter") {
      addTodo(todoText);
      console.log("Añadido todos");
      console.log(todoText);
      console.log(todos);
    }
  };

  // Lógica para completar un todo
  const toggleCompleted = (id) => {
    const filtered = todos.filter((t) => t.id !== id);
    const foundTodo = todos.find((t) => t.id == id);
    setTodos([
      ...filtered,
      {
        ...foundTodo,
        completed: !foundTodo.completed,
      },
    ]);
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
          <input
            type="text"
            className="form-control"
            placeholder="Add Todo"
            name="desc"
            onChange={(evt) => setTodoText(evt.target.value)}
            value={todoText}
            onKeyDownCapture={handleKeyCapture}
          />
        </div>

        {/* TodoList */}
        <div className="col-sm-12 col-md-8">
          <h3>Todo List</h3>
          <ul className="list-unstyled">
            {/* TodoList Item */}
            {todos.map((todo) => {
              const text = todo.completed ? "Completado" : "Completar";
              const btnClass = todo.completed ? 'btn-success' : 'btn-warning';
              return (
                <li
                  key={todo.id}
                  className="d-flex justify-content-between align-items-center bg-light p-3"
                >
                  <span>{todo.title}</span>
                  <button
                    onClick={() => toggleCompleted(todo.id)}
                    className={`btn ${btnClass}`}
                  >{text}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
