const { toDoRouter } = require("./routes/toDo.router");
const cors = require("cors");

const express = require("express");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/toDo", toDoRouter);
app.use("toDo/:id", toDoRouter);

module.exports = app;
