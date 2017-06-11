// Server Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(process.cwd() + "/public"));
let router = express.Router();

// Import models and set up Mongoose

mongoose.connect("mongodb://localhost/nytreact");
const db = mongoose.connection;

// Routers
app.use(require("./routes/html.js")(router));

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});
