const express =require('express').Router
const Router =express()
const modules=require('../api/modules')
const Qmodule=modules.Qmodule

//help section
let formdata;
Router.post("/", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    let Query = new Qmodule({
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
Router.post("/Reg", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    let Query = new Qmodule({
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
Router.post("/Noti", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    let Query = new Qmodule({
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
Router.post("/Vid", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    let Query = new Qmodule({
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
Router.post("/abt", (req, res) => {
    formdata = (req.body);
    name = formdata.name;
    email = formdata.email;
    description = formdata.query;
    let Query = new Qmodule({
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

module.exports=Router