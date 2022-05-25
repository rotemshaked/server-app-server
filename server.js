require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const serversRouter = require("./routes/serversRouter");
const typesRouter = require("./routes/typesRouter");

const uri = process.env.URI;
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/", serversRouter);
app.use("/types", typesRouter);
app.use("*", (req, res) => {
  res.send("this route is not defind");
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
  mongoose.connect(uri, () => {
    console.log("connected to mongoDB!");
  });
});
