const express = require("express");
const router = express.Router();
const db = require("../models/queries");

router.get("/", db.getAllTodos);
router.get("/:id", db.getTodoById);
router.post("/", db.addTodo);
router.put("/:id", db.updateTodo);
router.delete("/:id", db.deleteTodo);

module.exports = router;
