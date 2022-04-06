const logic = require("../logic/logic");
const internalServerErrorMessage = "Internal server error";
const noTypesMessage = "No types were found";
const incorrectDetailsMessage = "Incorrect details were provided";

const getAllTypes = async (req, res) => {
  try {
    const types = await logic.getAllTypes();
    if (!types) {
      res.status(404).send(noTypesMessage);
    }
    res.status(200).send(types);
  } catch {
    res.status(500).send(internalServerErrorMessage);
  }
};

const getType = async (req, res) => {
  try {
    const id = req.body._id;
    const type = await logic.getType(id);
    if (!type) {
      res.status(404).send(incorrectDetailsMessage);
    }
    res.status(200).send(type);
  } catch {
    res.status(500).send(internalServerErrorMessage);
  }
};

module.exports = { getType, getAllTypes };
