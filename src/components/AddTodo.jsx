import { useState } from "react";

export function AddTodo({ addTodo }) {
  // Lógica para añadir un todo
  // Texto del Todo a ser añadido
  const [todoText, setTodoText] = useState("");
  // Manejar evento onKeyCapture
  const handleKeyCapture = (evt) => {
    console.log("Presionada una tecla", evt.key);
    if (evt.key == "Enter" && todoText !== "") {
      addTodo(todoText);
      setTodoText('');
    }
  };
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Add Todo"
      name="desc"
      onChange={(evt) => setTodoText(evt.target.value)}
      value={todoText}
      onKeyDownCapture={handleKeyCapture}
    />
  );
}
