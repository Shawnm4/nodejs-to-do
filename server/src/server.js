const { startMongo, stopMongo } = require("./services/mongo");

const PORT = 5000;
const app = require("./app");

const http = require("http");

const server = http.createServer(app);

async function startServer() {
  await startMongo();
  server.listen(PORT, () => {
    console.log(`Listening on Port:${PORT}`);
  });
}
startServer();
const test = "test";
