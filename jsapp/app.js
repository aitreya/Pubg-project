const moment = require('moment')
console.log('Started app at ' + moment().format("DD-MM-YY") + " @ " + moment().format(" HH-mm-ss"));

const express = require("express");
const app = express();
const port = 8001;
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const socket = require('socket.io');
const socketconnection = require('./api/adminpannel/socetsconnentions')
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/../htmls/pugfiles'));
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('html', require('ejs').renderFile);
const getroutes = require("./routes/getroutes")
const helproutes = require("./routes/helproutes")
const loginsystem = require("./api/login/loginapi")
const payment = require("./api/pament-datasaving");
const { kMaxLength } = require('buffer');
app.use(getroutes)
app.use(helproutes)
app.use(payment)
app.use(loginsystem.Router)
app.get("/adduser", (req, res) => {
    res.send(loginsystem.addUser('abhi','rikin@123'));
});
app.get("*", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../htmls/custom_404.html'));
});

mongoose.connect('mongodb://127.0.0.1/testbeta', { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//server starting
var server = app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

var io = socket(server);
socketconnection.connection(io)
