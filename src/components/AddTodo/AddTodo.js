import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  let isDisabled = !title || !desc;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Blank values are not allowed");
    } else {
      let newTodo = {
        title: title,
        description: desc,
        id: new Date(),
        checked: false,
        points: 10,
      };
      setTodos([...todos, newTodo]);
    }
    clearHanlder();
  };

  const clearHanlder = () => {
    setTitle("");
    setDesc("");
  };
  return (
    <div className="flex">
      <form className="form">
        <h3>Add TODOS</h3>
        <div className="formInput">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Todo"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            pattern={[0-9]}
            onKeyDown={(event) => {
              if (!/\d/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>
        <div className="formInput">
          <label>Description</label>
          <input
            type="text"
            placeholder="Enter Description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <button
          className="submitBtn"
          onClick={submitHandler}
          disabled={isDisabled}
        >
          Submit
        </button>
        <button className="clearBtn" onClick={clearHanlder}>
          Clear All
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
