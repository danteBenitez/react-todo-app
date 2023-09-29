export function TodoList({ todos, toggleCompleted }) {
  return (
    <div className="col-sm-12 col-md-8">
      <h3>Todo List</h3>

      <ul className="list-unstyled">
        {todos.length == 0 ? (
          <li className="rounded-3 p-3 text-black text-center fs-6 bg-info-subtle">
            No hay todos para mostrar
          </li>
        ) : (
          todos.map((todo) => {
            const text = todo.completed ? "Completado" : "Completar";
            const btnClass = todo.completed ? "btn-success" : "btn-warning";
            const bgClass = todo.completed ? "alert-success" : "alert-warning";
            return (
              <li
                key={todo.id}
                className={`d-flex justify-content-between gap-3 alert align-items-center ${bgClass} p-3`}
              >
                <span className="text-body-emphasis fs-6">{todo.title}</span>
                <button
                  onClick={() => toggleCompleted(todo.id)}
                  className={`btn ${btnClass}`}
                >
                  {text}
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
