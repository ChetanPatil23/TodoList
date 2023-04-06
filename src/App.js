import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TodosList from "./components/TodosList/TodosList";
import { mockData } from "./mockData";

function App() {
  const [todos, setTodos] = useState(mockData);
  return (
    <div className="App">
      <Navbar todos={todos} setTodos={setTodos} />
      <AddTodo todos={todos} setTodos={setTodos}/>
      <TodosList todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default App;
