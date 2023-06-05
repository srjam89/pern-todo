const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  host: process.env.DBHOST,
  database: "pern_todos",
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
});

module.exports = pool;
