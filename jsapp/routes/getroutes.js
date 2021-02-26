const express = require('express').Router
const Router = express()
const path = require('path');
const modules = require('../api/modules')
const regmodule = modules.regmodule
var regnop, regnof;


Router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../index.html'));
});
Router.get("/home", (req, res) => {
    res.status(200).redirect("/");
});
Router.get("/home.html", (req, res) => {
    res.status(200).redirect("/");
});
Router.get("/about",(req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../about.html'));
});
Router.get("/about.html", (req, res) => {
    res.status(200).redirect("/about");
});
Router.get("/Registration", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../Registration.html'));
});
Router.get("/Registration.html", (req, res) => {
    res.status(200).redirect("/Registration");
});
Router.get("/Notification", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../Notification.html'));
});
Router.get("/Notification.html", (req, res) => {
    res.status(200).redirect("/Notification");
});
Router.get("/Videos", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../Videos.html'));
});
Router.get("/Videos.html", (req, res) => {
    res.status(200).redirect('/Videos');
});
Router.get("/desktop.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/desktop.css'));
});
Router.get("/phone.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/phone.css'));
});
Router.get("/index.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/index/index.css'));
});
Router.get("/index_mob.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/index/index_mob.css'));
});
Router.get("/registration.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/registration/registration.css'));
});
Router.get("/registration_mob.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/registration/registration_mob.css'));
});
Router.get("/notification.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/notification/notification.css'));
});
Router.get("/notification_mob.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/notification/notification_mob.css'));
});
Router.get("/Videos.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/Videos/Videos.css'));
});
Router.get("/Videos_mob.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/Videos/Videos_mob.css'));
});
Router.get("/about.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/about/about.css'));
});
Router.get("/animation.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/animation.css'));
});
Router.get("/animation.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/animation.css'));
});
Router.get("/dow.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../css/index/dow.css'));
});
Router.get("/logo.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../photos/logo.png'));
});
Router.get("/Hicon.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../photos/Hicon.png'));
});
Router.get("/close-icon.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../photos/close-icon.png'));
});
Router.get("/pubglogo.jpg", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../photos/pubglogo.jpg'));
});
Router.get("/table.JPG", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../photos/table.JPG'));
});
Router.get("/freefirelogo.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../photos/freefirelogo.png'));
});
Router.get("/help.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../photos/help.png'));
});
Router.get("/404.png", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../photos/404.png'));
});
Router.get("/help%20btn.js", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../javascripts/help btn.js'));
});
Router.get("/ham%20menu.js", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../javascripts/ham menu.js'));
});
Router.get("/registration.js", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../javascripts/registration.js'));
});
Router.get("/shared.js", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../javascripts/shared.js'));
});
Router.get("/Privacypolicy", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../htmls/privacy policy.html'));
});
Router.get("/pubgform", (req, res) => {
    regmodule.findOne({}).then(
        doc => {
            let i = doc.regnop
            ord = 'Reg' + i + 'p';
            res.status(200).render((path.join(__dirname + '/../../htmls/registration/regpubg.html')), { orderid: ord });
        })
});
Router.get("/jsonconvert.js", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../htmls/login/jsonconvert.js'));
});
Router.get("/jsonconvert.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../htmls/login/jsonconvert.css'));
});
Router.get("/admin.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../htmls/login/adminpannel.css'));
});
Router.get("/freefireform", (req, res) => {
    regmodule.findOne({}).then(
        doc => {
            let i = doc.regnof
            ord = 'Reg' + i + 'f';
            res.status(200).render((path.join(__dirname + '/../../htmls/registration/regff.html')), { orderid: ord });
        })
});
Router.get("/regformstyle.css", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../../htmls/registration/style.css'));
});

module.exports = Router