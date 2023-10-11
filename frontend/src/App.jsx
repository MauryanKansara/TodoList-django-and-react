import "./App.css";
import { useRef, useState } from "react";
import useFetchData from "./hooks/useFetchData";
import UserInput from "./Components/UserInput";
import TodoList from "./Components/TodoList";

function App() {
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(false);
  const inputRef = useRef(null);
  const [input, setInput] = useState("");

  const [activeItem, setActiveItem] = useState({
    name: input,
    completed: false,
    created_at: "random string",
  });

  const todoList = useFetchData(activeItem);

  return (
    <main className="container">
      <h1>Todo List</h1>
      <div className="todo-wrapper">
        <UserInput
          input={input}
          inputRef={inputRef}
          setInput={setInput}
          edit={edit}
          setEdit={setEdit}
          id={id}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <br />
        <TodoList
          todoList={todoList}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setEdit={setEdit}
          setInput={setInput}
          setId={setId}
          inputRef={inputRef}
        />
      </div>
    </main>
  );
}

export default App;
