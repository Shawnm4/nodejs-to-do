const _ = require("lodash");

const toDosArray = [];

function addId(obj) {
  const newObj = {
    ...obj,
    id: _.uniqueId(),
  };
  return newObj;
}

function addToDoObj(toDoObj) {
  return toDosMap.set(toDoObj.id, toDoObj);
}

function deleteToDo(toDosArray, key, id) {
  const objToBeDeleted = toDosArray.find((obj) => obj[key] === id);
  const indexToBeDeleted = toDosArray.findIndex((obj) => obj[key] === id);
  console.log(toDosArray[indexToBeDeleted]);
  if (indexToBeDeleted !== -1) {
    toDosArray.splice(indexToBeDeleted, 1);
  }
  return objToBeDeleted;
}

module.exports = {
  toDosArray,
  addId,
  addToDoObj,
  deleteToDo,
};
