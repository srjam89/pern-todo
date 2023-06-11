import React, { useState, useEffect } from "react";
import todosCSS from "../styles/todos.module.css";
import ListTodos from "./listTodos";

const TodoList = () => {
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:8000/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/todos");
      const jsonData = await response.json();
      console.log(jsonData);
      setTodos(jsonData);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className={todosCSS.mainTodoContainer}>
      <div className={todosCSS.todoContainer}>
        <h1>Todo List</h1>
        <form className={todosCSS.formControl} onSubmit={onSubmit}>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Add Todo</button>
        </form>
        {loading ? <h2>Loading</h2> : <ListTodos todos={todos} />}
      </div>
    </div>
  );
};

export default TodoList;
