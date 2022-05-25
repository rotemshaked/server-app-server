const express = require("express");
const serversRouter = express.Router();
const {
  getServersByPage,
  deleteServer,
  createServer,
  changeServerRuning,
  create100Servers,
  deleteAll,
} = require("../controllers/servers");

serversRouter
  .route("/servers")
  .get(getServersByPage)
  .put(changeServerRuning)
  .delete(deleteServer);
serversRouter.delete("/deleteAll", deleteAll);
serversRouter.post("/create", createServer);
serversRouter.post("/create100", create100Servers);

module.exports = serversRouter;
