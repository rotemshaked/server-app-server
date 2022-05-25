const logic = require("../logic/logic");
const internalServerErrorMessage = "Internal server error";
const noServersMessage = "No servers were found";
const incorrectDetailsMessage = "Incorrect details were provided";

const getServersByPage = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const servers = await logic.getServers(page, limit);
    if (!servers) {
      res.status(404).send(noServersMessage);
    }
    res.status(200).send(servers);
  } catch {
    res.status(500).send(internalServerErrorMessage);
  }
};

const getServer = async (req, res) => {
  try {
    const id = req.body._id;
    const server = await logic.getServer(id);
    if (!server) {
      res.status(404).send(incorrectDetailsMessage);
    }
    res.status(200).send(server);
  } catch {
    res.status(500).send(internalServerErrorMessage);
  }
};
const findFromAllServers = async (req, res) => {
  try {
    const servers = await logic.findFromAllServers();
    if (!servers) {
      res.status(404).send(incorrectDetailsMessage);
    }
    res.status(200).send(servers);
  } catch {
    res.status(500).send(internalServerErrorMessage);
  }
};

const deleteServer = async (req, res) => {
  try {
    const id = req.body._id;
    const server = await logic.deleteServer(id);
    if (!server) {
      res.status(404).send(noServersMessage);
    }
    res.status(200).send(server);
  } catch {
    res.status(500).send(internalServerErrorMessage);
  }
};

const createServer = async (req, res) => {
  try {
    const server = req.body;
    const createServer = await logic.createServer(server);
    if (!createServer) {
      res.status(404).send(incorrectDetailsMessage);
    }
    res.status(200).send(createServer);
  } catch {
    res.status(500).send(internalServerErrorMessage);
  }
};

const create100Servers = async (req, res) => {
  try {
    const createServer = await logic.create100Servers();
    if (!createServer) {
      res.status(404).send(incorrectDetailsMessage);
    }
    res.status(200).send(createServer);
  } catch {
    res.status(500).send(internalServerErrorMessage);
  }
};

const changeServerRuning = async (req, res) => {
  try {
    const serverId = req.body._id;
    const changeDetailes = await logic.changeServerRuning(serverId);
    if (!changeDetailes) {
      res.status(404).send(incorrectDetailsMessage);
    }
    res.status(200).send(changeDetailes);
  } catch {
    res.status(500).send(internalServerErrorMessage);
  }
};

const deleteAll = async (req, res) => {
  try {
    const deleted = await logic.deleteAll();
    if (!deleted) {
      res.status(404).send(incorrectDetailsMessage);
    }
    res.status(200).send(noServersMessage);
  } catch {
    res.status(500).send(internalServerErrorMessage);
  }
};

module.exports = {
  getServersByPage,
  getServer,
  deleteServer,
  createServer,
  changeServerRuning,
  create100Servers,
  deleteAll,
  findFromAllServers,
};
