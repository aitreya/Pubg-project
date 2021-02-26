const express = require("express");
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../index.html'));
});
app.get("/home", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../index.html'));
});
app.get("/home.html", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../index.html'));
});
app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../about.html'));
});
app.get("/about.html", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../about.html'));
});
app.get("/Registration", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../Registration.html'));
});
app.get("/Registration.html", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../Registration.html'));
});
app.get("/Notification", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../Notification.html'));
});
app.get("/Notification.html", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../Notification.html'));
});
app.get("/Videos", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../Videos.html'));
});
app.get("/Videos.html", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../Videos.html'));
});
app.get("/desktop.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/desktop.css'));
});
app.get("/phone.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/phone.css'));
});
app.get("/index.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/index/index.css'));
});
app.get("/index_mob.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/index/index_mob.css'));
});
app.get("/registration.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/registration/registration.css'));
});
app.get("/registration_mob.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/registration/registration_mob.css'));
});
app.get("/notification.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/notification/notification.css'));
});
app.get("/notification_mob.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/notification/notification_mob.css'));
});
app.get("/Videos.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/Videos/Videos.css'));
});
app.get("/Videos_mob.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/Videos/Videos_mob.css'));
});
app.get("/about.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/about/about.css'));
});
app.get("/animation.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/animation.css'));
});
app.get("/animation.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/animation.css'));
});
app.get("/dow.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../css/index/dow.css'));
});
app.get("/logo.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../photos/logo.png'));
});
app.get("/Hicon.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../photos/Hicon.png'));
});
app.get("/close-icon.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../photos/close-icon.png'));
});
app.get("/pubglogo.jpg", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../photos/pubglogo.jpg'));
});
app.get("/table.JPG", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../photos/table.JPG'));
});
app.get("/freefirelogo.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../photos/freefirelogo.png'));
});
app.get("/help.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../photos/help.png'));
});
app.get("/help%20btn.js", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../javascripts/help btn.js'));
});
app.get("/ham%20menu.js", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../javascripts/ham menu.js'));
});
app.get("/registration.js", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../javascripts/registration.js'));
});
app.get("/shared.js", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../javascripts/shared.js'));
});
app.get("/Privacypolicy", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../htmls/privacy policy.html'));
});
app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname + '/../htmls/custom_404.html'));
});

// getting-started with mongodb--mongoose
var name;
var email;
var description;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aitreya', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("We're connected! to MongoDB");
});
var Qscheama = new mongoose.Schema({
    name: String,
    email: String,
    description: String
});
var Qmodule = mongoose.model('Query', Qscheama);


//post request
var formdata;
app.post("/", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    var Query = new Qmodule({ name: name, email: email, description: description });
    console.log(name + " has a qeury of " + description + " and gave the " + email + " to contact them.");
    Query.save(function (err, Query) {
        if (err) return console.error(err);
        console.log("saved");
    }); setTimeout(() => {
        res.status(200).sendFile(path.join(__dirname + '/../index.html'));
    }, 5000);
});
app.post("/Reg", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    var Query = new Qmodule({ name: name, email: email, description: description });
    console.log(name + " has a qeury of " + description + " and gave the " + email + " to contact them.");
    Query.save(function (err, Query) {
        if (err) return console.error(err);
        console.log("saved");
    }); setTimeout(() => {
        res.status(200).sendFile(path.join(__dirname + '/../Registration.html'));
    }, 5000);
});
app.post("/Noti", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    var Query = new Qmodule({ name: name, email: email, description: description });
    console.log(name + " has a qeury of " + description + " and gave the " + email + " to contact them.");
    Query.save(function (err, Query) {
        if (err) return console.error(err);
        console.log("saved");
    }); setTimeout(() => {
        res.status(200).sendFile(path.join(__dirname + '/../Notification.html'));
    }, 5000);
});
app.post("/Vid", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    var Query = new Qmodule({ name: name, email: email, description: description });
    console.log(name + " has a qeury of " + description + " and gave the " + email + " to contact them.");
    Query.save(function (err, Query) {
        if (err) return console.error(err);
        console.log("saved");
    }); setTimeout(() => {
        res.status(200).sendFile(path.join(__dirname + '/../Videos.html'));
    }, 5000);
});
app.post("/abt", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    var Query = new Qmodule({ name: name, email: email, description: description });
    console.log(name + " has a qeury of " + description + " and gave the " + email + " to contact them.");
    Query.save(function (err, Query) {
        if (err) return console.error(err);
        console.log("saved");
    }); setTimeout(() => {
        res.status(200).sendFile(path.join(__dirname + '/../about.html'));
    }, 5000);
});


//server starting
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
