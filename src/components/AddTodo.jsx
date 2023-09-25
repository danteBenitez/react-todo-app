import { useState } from "react";

export function AddTodo({ todos, setTodos }) {
  // Lógica para añadir un todo
  // Texto del Todo a ser añadido
  const [todoText, setTodoText] = useState("");

  const addTodo = (text) => {
    const newTodo = {
        id: new Date().getTime(),
        title: text,
        completed: false
    };
    setTodos([
        ...todos,
        newTodo
    ]);
  };

  // Manejar evento onKeyUpCapture
  const handleKeyCapture = (evt) => {
    evt.preventDefault();
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
        name="newTodo"
        onChange={(evt) => setTodoText(evt.target.value)}
        value={todoText}
        onKeyUpCapture={handleKeyCapture}
      />
    </div>
  );
}
