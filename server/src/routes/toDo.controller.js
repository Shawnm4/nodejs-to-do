const { toDosArray, addId, deleteToDo } = require("../models/toDo.model");

function getAllToDosController(req, res) {
  return res.status(200).send(toDosArray);
}

function postToDoController(req, res) {
  const toDoWithId = addId(req.body);
  toDosArray.push(toDoWithId);
  return res.status(200).send(toDosArray).json();
}

function deleteToDoController(req, res) {
  const toDoId = req.params.id;
  const objToBeDeleted = deleteToDo(toDosArray, "id", toDoId);
  console.log(objToBeDeleted);
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
