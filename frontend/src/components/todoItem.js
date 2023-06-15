import React, { useState } from "react";
import todoItemCSS from "../styles/todoItemCSS.module.css";

const TodoItem = ({ todos, deleteTodo }) => {
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(todos.description);
  const descriptionTodo = todos.description;

  const submitNewTodo = async (e) => {
    e.preventDefault();
    const body = { description };
    try {
      const response = await fetch(
        `http://localhost:8000/api/todos/${todos.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {}
  };

  const clickEdit = () => {
    setEdit(true);
    setDescription(todos.description);
  };

  const viewTemplate = (
    <div className={todoItemCSS.itemContainer}>
      <li>{descriptionTodo}</li>
      <button onClick={clickEdit} className={todoItemCSS.editBtn}>
        Edit
      </button>
      <button
        onClick={() => deleteTodo(todos.todo_id)}
        className={todoItemCSS.deleteBtn}
      >
        Delete
      </button>
    </div>
  );

  const editTemplate = (
    <div>
      <form style={{ marginTop: "20px" }}>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          id={todos.todo_id}
          autoComplete="off"
        />
        <button
          className={todoItemCSS.cancelBtn}
          onClick={() => setEdit(false)}
          type="button"
        >
          Cancel
        </button>
        <button onClick={(e) => submitNewTodo(e)}>Save</button>
      </form>
    </div>
  );

  return <div>{edit ? editTemplate : viewTemplate}</div>;
};

export default TodoItem;
