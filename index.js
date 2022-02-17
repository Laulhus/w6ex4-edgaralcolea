require("dotenv").config();
const debug = require("debug")("calculator:root");
const { initializeServer } = require("./server/index");

const port = process.env.PORT || 4000;

(async () => {
  try {
    await initializeServer(port);
  } catch {
    debug(`There has been an error on http://localhost:${port}`);
  }
})();
