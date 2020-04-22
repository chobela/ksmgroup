const express = require("express");
const app = new express();
const mongoose = require("mongoose");
const parser = require("body-parser");
const router = require("./routes/api");

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("listening on port 4000");
});

app.use(parser.json());
app.use("/api", router);

mongoose.connect(
  "mongodb+srv://chobela:theresa1@cluster0-fuasl.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection
  .once("open", function () {
    console.log("connected to database.");
  })
  .on("error", function () {
    console.log("Oh no, failed to connected to database.");
  });
