var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var o1Router = require("./routes/outil1");
var o3Router = require("./routes/outil3");
var o4Router = require("./routes/outil4");
var o5Router = require("./routes/outil5");
var o6Router = require("./routes/outil6");
var o7Router = require("./routes/outil7");


var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/outil1", o1Router);
app.use("/outil3", o3Router);
app.use("/outil4", o4Router);
app.use("/outil5", o5Router);
app.use("/outil6", o6Router);
app.use("/outil7", o7Router);



const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbName = "web";
const dbURL = `mongodb://localhost:27017/${dbName}`;

// Connecting to the database
mongoose.connect(dbURL,{
    useNewUrlParser : true
});




module.exports = app;
