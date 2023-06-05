const db = require("../db");

const getAllTodos = (req, res) => {
  db.query("SELECT * FROM todo", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
};

const getTodoById = (req, res) => {
  const id = parseInt(req.params.id);
  db.query("SELECT * FROM todo WHERE todo_id = $1", [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows[0]);
  });
};

const addTodo = (req, res) => {
  const { description } = req.body;
  db.query(
    "INSERT INTO todo (description) VALUES ($1) RETURNING *",
    [description],
    (err, result) => {
      if (err) {
        return res.status(400).send(err);
      }
      res.status(201).send(result.rows[0]);
    }
  );
};

const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const { description } = req.body;
  db.query(
    "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
    [description, id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(201).json(result.rows);
    }
  );
};

const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  db.query("DELETE FROM todo WHERE todo_id = $1", [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).send(`Todo with id ${id} has been deleted.`);
  });
};

module.exports = {
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  addTodo,
};
