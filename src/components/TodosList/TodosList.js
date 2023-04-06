import React from "react";
import "./TodosList.css";
import SingleTodo from "../SingleTodo/SingleTodo";

const TodosList = ({ todos, setTodos }) => {
  let pointsScored = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].checked) {
      pointsScored += todos[i].points;
    }
  }
  let totalPoints = todos.reduce((points, todo) => (points += todo.points), 0);

  const filterTodos = (id) => {
    const filteredItems = todos.filter((todo) => todo.id !== id);
    setTodos(filteredItems);
  };

  const reOrderAndStrike = (id) => {
    let newArr = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(newArr);
  };
  console.log(todos);

  return (
    <div className="TodosList">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 20px",
        }}
      >
        <h1>
          TodosList -
          <span className={todos.length > 1 ? "green" : "red"}>
            {todos.length}
          </span>
        </h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <h4>Average Rating: Total Rating</h4>
          <h4>
            Points scored: {pointsScored}/{totalPoints}
          </h4>
        </div>
      </div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            filterTodos={filterTodos}
            reOrderAndStrike={reOrderAndStrike}
          />
        ))
      ) : (
        <h2>No Items to display</h2>
      )}
    </div>
  );
};

export default TodosList;
