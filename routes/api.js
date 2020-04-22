const express = require("express");

const router = express.Router();
const empModel = require("../models/employee");

router.get("/employees", function (req, res) {
  empModel.find({}).then(function (emps) {
    res.send(emps);
  });
});

router.post("/employees", function (req, res) {
  const newperson = new empModel(req.body);
  newperson.save(req.body);
});

router.post("/remove", function (req, res) {
  empModel.deleteMany({}, function () {
    console.log("Delete!");
  });
});

module.exports = router;
