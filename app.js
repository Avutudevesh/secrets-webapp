const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function() {
	console.log("Server Started on post 3000");
});
