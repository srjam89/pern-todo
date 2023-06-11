import React from "react";
import TodoItem from "./todoItem";
import listTodosCSS from "../styles/listTodosCSS.module.css";

const ListTodos = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todos={todo} key={todo.todo_id} />
      ))}
    </ul>
  );
};

export default ListTodos;
