const express = require("express");
const apiRouter = express.Router();

const todos = require("./todos");
apiRouter.use("/todos", todos);

module.exports = apiRouter;
