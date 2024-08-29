const {
  getAllToDosController,
  postToDoController,
  deleteToDoController,
} = require("./toDo.controller");

const express = require("express");

const toDoRouter = express.Router();

toDoRouter.get("/", getAllToDosController);
toDoRouter.post("/", postToDoController);
toDoRouter.delete("/:id", deleteToDoController);

module.exports = {
  toDoRouter,
};
