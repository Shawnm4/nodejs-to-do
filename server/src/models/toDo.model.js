const mongoDataBase = require("./toDo.mongo");

const _ = require("lodash");

const toDosArray = [];

function addIdAndToDoStatus(obj) {
  const newObj = {
    ...obj,
    id: _.uniqueId(),
    completed: false,
  };

  return newObj;
}

function addToDoObj(toDoObj) {
  return toDosMap.set(toDoObj.id, toDoObj);
}

function setToDoFalse(toDosArray, key, id) {
  const objToBeDeleted = toDosArray.find((obj) => obj[key] === id);

  if (objToBeDeleted) {
    console.log(objToBeDeleted["completed"]);
    objToBeDeleted["completed"] = false;
    console.log(objToBeDeleted);
  }
  return objToBeDeleted;
}

async function addToMongoDb(toDoObj) {
  console.log(`Adding this to data base: ${JSON.stringify(toDoObj)}`);
  return await mongoDataBase.updateOne(
    {
      id: toDoObj.id,
    },
    {
      toDoObj,
    },
    {
      upsert: true,
    }
  );
}
module.exports = {
  toDosArray,
  addIdAndToDoStatus,
  addToDoObj,
  setToDoFalse,
  addToMongoDb,
};
