const PORT = 5000;
const app = require("./app");

const http = require("http");

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on Port:${PORT}`);
});

const test = "test";
