const express = require("express");
const app = express();
const port = 8001;
const path = require('path');
const bodyParser = require('body-parser')
const moment = require('moment')
const fs = require('fs');
const pug = require('pug');
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/../htmls/pugfiles'));
var cp;
var cf;
app.use(bodyParser.urlencoded({ extended: false }))
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/images/' + (req.url).trim())
    },
    filename: function (req, file, cb) {
        if (req.url == '/registerpubg') {
            cb(null, cp + '_' + 'ss.jpg');
        }
        if (req.url == '/registerfreefire') {
            cb(null, cf + '_' + 'ss.jpg');
        }
    }
})
const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 3 } });
console.log('Started app at ' + moment().format("DD-MM-YY") + " @ " + moment().format(" HH-mm-ss"));

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../index.html'));
});
app.get("/home", (req, res) => {
    res.status(200).redirect("/");
});
app.get("/home.html", (req, res) => {
    res.status(200).redirect("/");
});
app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../about.html'));
});
app.get("/about.html", (req, res) => {
    res.status(200).redirect("/about");
});
app.get("/Registration", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../Registration.html'));
});
app.get("/Registration.html", (req, res) => {
    res.status(200).redirect("/Registration");
});
app.get("/Notification", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../Notification.html'));
});
app.get("/Notification.html", (req, res) => {
    res.status(200).redirect("/Notification");
});
app.get("/Videos", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../Videos.html'));
});
app.get("/Videos.html", (req, res) => {
    res.status(200).redirect('/Videos');
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
app.get("/404.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../photos/404.png'));
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
app.get("/pubgform", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../htmls/registration/regpub.html'));
});
app.get("/jsonconvert.js", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../htmls/login/jsonconvert.js'));
});
app.get("/jsonconvert.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../htmls/login/jsonconvert.css'));
});
app.get("/freefireform", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../htmls/registration/regff.html'));
});
app.get("/regformstyle.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../htmls/registration/style.css'));
});
app.get("/login", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../htmls/login/login.html'));
});
app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname + '/../htmls/custom_404.html'));
});

// getting-started with mongodb--mongoose
var name;
var email;
var description;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testbeta', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("We're connected! to MongoDB");
});

//Queries work
var Qscheama = new mongoose.Schema({
    name: String,
    email: String,
    description: String
});
var Qmodule = mongoose.model('Query', Qscheama);

//pubg work
var pubgresisterschema = new mongoose.Schema({
    name: String,
    email: String,
    gameid: String,
    phone: String,
    photopath: String,
    paymentid: String,
    timestamp: String,
    aproved: String,
    regid: String
});
var pubgregistermodule = mongoose.model('PubgRegiatration', pubgresisterschema);

//freefire work
var freefireresisterschema = new mongoose.Schema({
    name: String,
    email: String,
    gameid: String,
    phone: String,
    photopath: String,
    paymentid: String,
    timestamp: String,
    aproved: String,
    regid: String
});
var freefireregistermodule = mongoose.model('FreefireRegiatration', freefireresisterschema);

//registartion number
var regsch = new mongoose.Schema({
    name: String,
    regnop: String,
    regnof: String,
});
var regnof, regnop, updatename;
var regmodule = mongoose.model('Regmodule', regsch);
regmodule.findOne({}).then(
    doc => {
        console.log('Starting app from registration numbers :' + doc.regnop + ' & ' + doc.regnof);
        regnop = doc.regnop;
        regnof = doc.regnof;
        cp = doc.regnop;
        cf = doc.regnop;
    })


//post request

//help section
var formdata;
app.post("/", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    var Query = new Qmodule({
        name: name,
        email: email,
        description: description
    });
    Query.save(function (err, Query) {
        if (err) return console.error(err);
    }); setTimeout(() => {
        res.status(200).redirect("/")
    }, 5000);
});
app.post("/Reg", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    var Query = new Qmodule({
        name: name,
        email: email,
        description: description
    });
    Query.save(function (err, Query) {
        if (err) return console.error(err);
    }); setTimeout(() => {
        res.status(200).redirect("/Registration");
    }, 5000);
});
app.post("/Noti", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    var Query = new Qmodule({
        name: name,
        email: email,
        description: description
    });
    Query.save(function (err, Query) {
        if (err) return console.error(err);
    }); setTimeout(() => {
        res.status(200).redirect("/Notification");
    }, 5000);
});
app.post("/Vid", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    var Query = new Qmodule({
        name: name,
        email: email,
        description: description
    });
    Query.save(function (err, Query) {
        if (err) return console.error(err);
    }); setTimeout(() => {
        res.status(200).redirect("/Videos");
    }, 5000);
});
app.post("/abt", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    var Query = new Qmodule({
        name: name,
        email: email,
        description: description
    });
    Query.save(function (err, Query) {
        if (err) return console.error(err);
    }); setTimeout(() => {
        res.status(200).redirect('/about')
    }, 5000);
});

// registration section
app.post('/registerpubg', upload.single('ss'), (req, res) => {
    var pathp = path.join(__dirname + '/uploads/images/registerpubg/' + cp + '_ss.jpg');
    var timest = moment().format("DD-MM-YY") + " @ " + moment().format(" HH-mm-ss");
    var psave = new pubgregistermodule({
        name: req.body.name,
        email: req.body.email,
        gameid: req.body.gameid,
        phone: req.body.phone,
        photopath: pathp,
        paymentid: req.body.paymentid,
        timestamp: timest,
        aproved: "Not checked yet",
        regid: regnop
    })
    psave.save(function (err, PubgRegiatration) {
        if (err) return console.error(err);
        console.log("saved registration of pubg mobile at " + timest + " at number : " + cp);
        cp++;
        regnop++;
        regmodule.updateMany({ regnop: regnop }).then(
            docc => {
                regnop: regnop
            })
        res.render('succreg', {
            name: "Name : " + req.body.name,
            email: " " + req.body.email,
            gameid: "Pubg Id name : " + req.body.gameid,
            phone: "Phone Number : " + req.body.phone,
            upload: "Photo Uploaded : Yes",
            paymentid: "Payment ID : " + req.body.paymentid,
            regid: "Registration ID : " + (regnop - 1)
        });
    });
});
app.post('/registerfreefire', upload.single('ss'), (req, res) => {
    var pathp = path.join(__dirname + '/uploads/images/registerfrefire/' + cf + '_ss.jpg');
    var timest = moment().format("DD-MM-YY") + " @ " + moment().format(" HH-mm-ss");
    var psave = new freefireregistermodule({
        name: req.body.name,
        email: req.body.email,
        gameid: req.body.gameid,
        phone: req.body.phone,
        photopath: pathp,
        paymentid: req.body.paymentid,
        timestamp: timest,
        aproved: "Not checked yet",
        regid: regnof
    })
    psave.save(function (err, PubgRegiatration) {
        if (err) return console.error(err);
        console.log("saved registration of freefire at " + timest + " at number : " + cf);
        cf++
        regnof++;
        regmodule.updateMany({ regnof: regnof }).then(
            docc => {
                regnof: regnof
            })
        res.render('succreg', {
            name: "Name : " + req.body.name,
            email: " " + req.body.email,
            gameid: "FreeFire Id name : " + req.body.gameid,
            phone: "Phone Number : " + req.body.phone,
            upload: "Photo Uploaded : Yes",
            paymentid: "Payment ID : " + req.body.paymentid,
            regid: "Registration ID : " + (regnof - 1)
        });;
    });
});

//login work
const access = require("../htmls/login/access");

app.post("/login", (req, res) => {
    username = req.body.username;
    password = req.body.password;
    if (access(username, password).code == 2) {
        //main work
        var pubgdata;
        var freefiredata;
        pubgregistermodule.find({}).then(
            doc => {
                pubgdata = JSON.stringify(doc);
            }).catch()
        freefireregistermodule.find({}).then(
            doc => {
                freefiredata = JSON.stringify(doc);
                res.render('succlogin', {
                    pubgdata: pubgdata,
                    freefiredata:freefiredata
                })
            }).catch()
    }
    else {
        res.render('faillogin',{
            msg:access(username, password).message
        })
    }
})

//server starting
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});