import { TodoApp } from "./pages/TodoApp.jsx";
import "./App.css";
import { TodosContextProvider } from "./context/TodoContext.jsx";

function App() {
  return (
    <TodosContextProvider>
      <TodoApp />;
    </TodosContextProvider>
  );
}

export default App;
