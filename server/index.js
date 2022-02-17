const debug = require("debug")("calculator:server");
const express = require("express");
const morgan = require("morgan");
const { router } = require("./routes/router");

const initializeServer = async (port) =>
  new Promise((resolve, reject) => {
    const app = express();
    app.use(morgan("dev"));
    app.use(express.json());

    const server = app.listen(port, () => {
      debug(`Server listening on http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error) => {
      const message = error.code;
      debug(message);
      reject();
    });

    app.get("/", (req, res) => {
      res.status(200);
      debug(`Request arrived at ${req.url} with method ${req.method}`);
      res.end();
    });

    app.use("/", router);
  });

module.exports = { initializeServer };
