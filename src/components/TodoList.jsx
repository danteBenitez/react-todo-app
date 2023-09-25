export function TodoList({ todos, toggleCompleted }) {
  return (
    <ul className="list-unstyled">
      {/* TodoList Item */}
      {todos.map((todo) => {
        const text = todo.completed ? "Completado" : "Completar";
        const btnClass = todo.completed ? "btn-success" : "btn-warning";
        return (
          <li
            key={todo.id}
            className="d-flex justify-content-between align-items-center bg-light p-3"
          >
            <span>{todo.title}</span>
            <button
              onClick={() => toggleCompleted(todo.id)}
              className={`btn ${btnClass}`}
            >
              {text}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
