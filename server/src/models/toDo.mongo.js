const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  completed: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ToDo", toDoSchema);
