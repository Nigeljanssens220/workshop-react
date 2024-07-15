import { useRef, useState } from "react";
import "./App.css";

/**
 * A todo shape should look like this:
 * {
 *  id: number,
 *   text: string,
 *   completed: boolean
 * }
 */

function App() {
  const inputRef = useRef();
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn HTML", completed: false },
    { id: 2, text: "Learn CSS", completed: false },
    { id: 3, text: "Learn Javascript", completed: false },
    { id: 4, text: "Learn React", completed: false },
    { id: 5, text: "Learn Nextjs", completed: false },
  ]);

  // TODO: Add logic to handle adding todos
  const handleAddTodo = (e) => {
    e.preventDefault();

    const todoText = inputRef.current.value;
    console.log("adding todo", todoText);
  };

  // TODO: Add logic to handle deleting todos
  const handleDeleteTodo = (id) => {
    console.log("deleting todo", id);
  };

  // TODO: Add logic to handle completing todos
  const handleCompleteTodo = (id) => {
    console.log("completing todo", id);
  };

  return (
    <div>
      Todos
      {/* List of todos */}
      <ol className="todo-list">
        <input ref={inputRef} type="text" placeholder="Add todo" />
        <button onClick={handleAddTodo}>Add</button>
      </ol>
    </div>
  );
}

export default App;

