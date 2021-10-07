const express = require('express').Router;
const Router = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectEnsureLogin = require('connect-ensure-login');
const passportLocalMongoose = require('passport-local-mongoose');
const modules = require('../modules')
const sysinfo = require('../adminpannel/sysinfo/sysinfo').details
const sendmail=require('./../adminpannel/mailing section/sendmail');
const expressSession = require('express-session')({
    secret: 'abhi',
    resave: false,
    saveUninitialized: false
});
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));
Router.use(expressSession);
Router.use(passport.initialize());
Router.use(passport.session());

mongoose.connect('mongodb+srv://aitreya:aitreya1@projectdb.w2ra7.mongodb.net/testbeta?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const UserDetails = modules.UserDetails;
let pubgregistermodule = modules.pubgregistermodule;
let freefireregistermodule = modules.freefireregistermodule;

passport.use(UserDetails.createStrategy());

passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());

Router.get("/login", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '../../../../htmls/login/login.html'));
});
Router.post('/login', (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect('/login?info=' + info);
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                return res.redirect('/adminpannel');
            });

        })(req, res, next);
});

Router.get('/adminpannel', (req, res) => {                      //connection ensured login
    res.status(200).render((path.join(__dirname + '/../../../htmls/login/adminpannel.html')), {
        cpuname: sysinfo.cpuname,
        cpucores: sysinfo.cpucores,
        ram: sysinfo.totalram,
        os: sysinfo.os,
    })
})

Router.get("/viewdata", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    let pubgdata;
    let freefiredata;
    pubgregistermodule.find({}).then(
        doc => {
            pubgdata = JSON.stringify(doc);
        }).catch()
    freefireregistermodule.find({}).then(
        doc => {
            freefiredata = JSON.stringify(doc);
            res.status(200).render(path.join(__dirname + '/viewdata'), {
                pubgdata: pubgdata,
                freefiredata: freefiredata
            })
        }).catch()
});
Router.get('/adminsrc.js', (rer, res) => {                       //connection ensured login
    res.status(200).sendFile((path.join(__dirname + '/../adminpannel/adminpannel.js')))
})

Router.post('/maildatasend', (req, res) => {
   sendmail.sendmail(req.body)
})

function addUser(user, pass) {
    UserDetails.register({ username: user, active: false }, pass);
}

module.exports = {
    Router: Router,
    addUser: addUser
}
