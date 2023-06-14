import React from "react";
import TodoItem from "./todoItem";

const ListTodos = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todos={todo} key={todo.todo_id} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default ListTodos;
