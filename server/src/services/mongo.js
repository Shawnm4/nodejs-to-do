const mongoose = require("mongoose");

const API_URL =
  "mongodb+srv://shawnm18057310:shark057@cluster0.vnrod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connection.once("open", () => {
  console.log("Mongo Started");
});

mongoose.connection.on("error", () => {
  console.error("error");
});

async function startMongo() {
  await mongoose.connect(API_URL);
}

async function stopMongo() {
  await mongoose.disconnect();
}

module.exports = { startMongo, stopMongo };
