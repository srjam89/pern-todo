import React from "react";
import todoItemCSS from "../styles/todoItemCSS.module.css";

const TodoItem = ({ todos, deleteTodo }) => {
  console.log(todos.description);
  const { description } = todos;

  return (
    <div className={todoItemCSS.itemContainer}>
      <li>{description}</li>
      <button className={todoItemCSS.editBtn}>Edit</button>
      <button
        onClick={() => deleteTodo(todos.todo_id)}
        className={todoItemCSS.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
