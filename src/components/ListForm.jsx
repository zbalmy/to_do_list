import React, { useState } from "react";

const ListForm = (props) => {
  const [list, setList] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(list);
    props.onNewTodo({ list, completed });
  };

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">List:</label>
          <input
            type="text"
            name="list"
            onChange={(e) => setList(e.target.value)}
            className="form-control"
          />
        </div>
        <div>
          <label className="form-label">Completed?</label>
          <input
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <div>
          <button className="btn btn-primary btn-block">Add</button>
        </div>
      </form>
    </div>
  );
};
export default ListForm;
