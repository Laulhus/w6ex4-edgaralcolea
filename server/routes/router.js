const express = require("express");
const debug = require("debug")("calculator:router");

const router = express.Router();

router.get("/sum", (req, res) => {
  debug("Accesing sum.");
  res.json({ operation: "sum" });
});

module.exports = { router };
