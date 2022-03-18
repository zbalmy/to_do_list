import React, { useState } from "react";

const ListDisplay = (props) => {
  const updatedLists = [...props.toDo];

  const recHandler = (i) => {
    updatedLists[i].completed = !updatedLists[i].completed;
    props.handleUpdate(updatedLists);
  };

  const deleteHandler = (i) => {
    const filteredList = updatedLists.filter((item, idx) => idx !== i);
    props.handleUpdate(filteredList);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>To Do</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.toDo.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.list}</td>
                <td>
                  {item.completed ? "Yes" : "No"}
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={(e) => recHandler(i)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => deleteHandler(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListDisplay;
