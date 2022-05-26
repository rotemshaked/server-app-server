const { find } = require("../models/server");
const Server = require("../models/server");
const Types = require("../models/types");

const getServers = async (page, limit) => {
  const pagination = {};
  pagination.servers = await Server.find({ deleted: "false" })
    .limit(limit)
    .skip((page - 1) * limit);
  pagination.next = await Server.find({ deleted: "false" })
    .limit(limit)
    .skip(page * limit);
  return pagination;
};

const getServer = async (id) => {
  const server = await Server.findById(id);
  return server;
};

const deleteServer = async (id) => {
  const server = await Server.findById(id);
  if (!server) {
    return;
  }
  if (server.sumToPay !== 0) {
    server.deleted = true;
    await server.save();
  } else {
    await Server.deleteOne({ _id: id });
  }
  return server;
};

const createServer = async (server) => {
  console.log(newServer, "newServer at logic before");

  const newServer = await new Server({
    ipAddress: server.ipAddress,
    name: server.name,
    type: server.typeId,
  });
  console.log(newServer, "newServer at logic after");
  if (!newServer) {
    return;
  }
  await newServer.save();
  return newServer;
};

const create100Servers = async () => {
  let newServer;
  const types = await getAllTypes();
  try {
    for (let i = 1; i <= 100; i++) {
      let name = `Server - ${i}`;
      let ipAddress = `${i}.${i}.${i}.${i}`;
      let randomNumber = Math.floor(Math.random() * 3);
      let typeId = types[randomNumber];
      newServer = await new Server({
        ipAddress: ipAddress,
        name: name,
        type: typeId,
      });
      await newServer.save();
    }
  } catch (err) {
    console.log(err);
  }
  return newServer;
};

const changeServerRuning = async (id) => {
  const getServer = await Server.findById(id);
  getServer.isRunning = !getServer.isRunning;
  getServer.isRunning
    ? (getServer.startingDate = Date.now())
    : (getServer.endingDate = Date.now());
  if (getServer.isRunning === false) {
    const sum = await getPrice(getServer);
    const price = Number(getServer.sumToPay) + sum;
    getServer.sumToPay = parseFloat(price).toFixed(2);
  }
  await getServer.save();
  return getServer;
};

const getAllTypes = async () => {
  const types = await Types.find();
  return types;
};

const getType = async (id) => {
  const types = await Types.findById(id);
  return types;
};

const getPrice = async (getServer) => {
  let ms = getServer.endingDate.getTime() - getServer.startingDate.getTime();
  let minutes = ms / (1000 * 60);
  let type = await getType(getServer.type);
  let sum = minutes * type.pricePerMinute;
  return sum;
};

const deleteAll = async () => {
  deleted = await Server.deleteMany();
};

module.exports = {
  getServers,
  getServer,
  deleteServer,
  createServer,
  getAllTypes,
  getType,
  changeServerRuning,
  create100Servers,
  deleteAll,
};
