const express = require("express");
const serversRouter = express.Router();
const {
  getAllServers,
  getServer,
  deleteServer,
  createServer,
  changeServerRuning,
  create100Servers,
  deleteAll,
} = require("../controllers/servers");

serversRouter.get("/servers", getAllServers);
serversRouter.put("/servers", changeServerRuning);
serversRouter.delete("/delete", deleteAll);
serversRouter.delete("/servers", deleteServer);
serversRouter.post("/create", createServer);
serversRouter.post("/create100", create100Servers);

module.exports = serversRouter;
