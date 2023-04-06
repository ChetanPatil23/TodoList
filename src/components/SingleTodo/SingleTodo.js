import React, { useState } from "react";
import "./SingleTodo.css";

const SingleTodo = ({ todo, filterTodos, reOrderAndStrike }) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxHandler = (id) => {
    setIsChecked(!isChecked);
    reOrderAndStrike(id);
  };
  return (
    <div className="singletodo">
      {todo.checked ? (
        <h3>
          <strike>{todo.title}</strike>
        </h3>
      ) : (
        <h3>{todo.title}</h3>
      )}
      <h4>{todo.description}</h4>
      <h5>Points: {todo.points}</h5>
      <button onClick={() => filterTodos(todo.id)}>Delete</button> &emsp;
      <input
        type="checkbox"
        onChange={() => checkboxHandler(todo.id)}
        checked={isChecked}
      />
      <span>Task completed</span>
    </div>
  );
};

export default SingleTodo;
