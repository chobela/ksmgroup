const mongoose = require("mongoose");

const myschema = new mongoose.Schema({
  name: String,
  department: String,
});

const myModel = new mongoose.model("employees", myschema);

module.exports = myModel;
