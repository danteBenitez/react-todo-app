import { useState } from "react";

export function AddTodo({ addTodo }) {
  // Lógica para añadir un todo
  // Texto del Todo a ser añadido
  const [todoText, setTodoText] = useState("");
  // Manejar evento onKeyCapture
  const handleKeyCapture = (evt) => {
    if (evt.key == "Enter" && todoText !== "") {
      addTodo(todoText);
      setTodoText("");
    }

  };
  return (
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
  );
}
