import React from "react";
import todoItemCSS from "../styles/todoItemCSS.module.css";

const TodoItem = ({ todos }) => {
  console.log(todos.description);
  const { description } = todos;
  return (
    <div className={todoItemCSS.itemContainer}>
      <li>{description}</li>
      <button className={todoItemCSS.editBtn}>Edit</button>
      <button className={todoItemCSS.deleteBtn}>Delete</button>
    </div>
  );
};

export default TodoItem;
