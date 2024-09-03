const {
  toDosArray,
  addIdAndToDoStatus,
  setToDoFalse,
  addToMongoDb,
} = require("../models/toDo.model");

const mongoose = require("mongoose");

function getAllToDosController(req, res) {
  return res.status(200).send(toDosArray);
}

function postToDoController(req, res) {
  const toDoWithId = addIdAndToDoStatus(req.body);
  console.log(toDoWithId);
  addToMongoDb(toDoWithId);
  return res.status(200).json({
    ok: true,
  });
}

function deleteToDoController(req, res) {
  const toDoId = req.params.id;
  const objToBeDeleted = setToDoFalse(toDosArray, "id", toDoId);
  // console.log(objToBeDeleted);
  res
    .status(200)
    .send({
      objDeleted: objToBeDeleted,
      updatedToDosArray: toDosArray,
    })
    .json();
}

module.exports = {
  getAllToDosController,
  postToDoController,
  deleteToDoController,
};
