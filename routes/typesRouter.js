const express = require("express");
const typesRouter = express.Router();
const { getType, getAllTypes } = require("../controllers/types");

typesRouter.get("/", getAllTypes);
typesRouter.get("/type", getType);

module.exports = typesRouter;
