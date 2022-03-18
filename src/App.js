import React, { useState } from "react";
import ListForm from "./components/ListForm";
import ListDisplay from "./components/ListDisplay";

function App() {
  const [toDo, setTodo] = useState([]);

  const receiveNewTodo = (newTodo) => {
    setTodo([...toDo, newTodo]);
  };

  const handleUpdate = (allLists) => {
    setTodo(allLists);
  };

  return (
    <div className="container mt-5">
      <ListForm onNewTodo={receiveNewTodo} />
      <ListDisplay toDo={toDo} handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
