const express =require('express').Router
const Router =express()
const crypto = require('crypto');
const moment = require('moment')
const modules = require("../api/modules")
const mailer = require("../api/mailer")
const pubgregistermodule = modules.pubgregistermodule
const freefireregistermodule = modules.freefireregistermodule
const regmodule = modules.regmodule
var regnof, regnop;
regmodule.findOne({}).then(
    doc => {
        console.log('Starting app from registration numbers :' + doc.regnop + ' & ' + doc.regnof);
        regnop = doc.regnop;
        regnof = doc.regnof;
    })

Router.post('/hashing', function (req, res) {
    let strdat = '';
    req.on('data', function (chunk) {
        strdat += chunk;
    });
    req.on('end', function () {
        let data = JSON.parse(strdat);
        let cryp = crypto.createHash('sha512');
        let text = data.key + '|' + data.txnid + '|' + data.amount + '|' + data.pinfo + '|' + data.fname + '|' + data.email + '|||||' + data.udf5 + '||||||' + data.salt;
        cryp.update(text);
        let hash = cryp.digest('hex');
        res.setHeader("Content-Type", "text/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(JSON.stringify(hash));
    });
});


//pubg data
Router.post('/pubgresult', function (req, res) {
    let key = req.body.key;
    let salt = req.body.salt;
    let txnid = req.body.txnid;
    let amount = req.body.amount;
    let productinfo = req.body.productinfo;
    let firstname = req.body.firstname;
    let email = req.body.email;
    let udf5 = req.body.udf5;
    let mihpayid = req.body.mihpayid;
    let status = req.body.status;
    let resphash = req.body.hash;
    let gameid = req.body.gameid;
    let mobile = req.body.mobile;
    let keyString = key + '|' + txnid + '|' + amount + '|' + productinfo + '|' + firstname + '|' + email + '|||||' + udf5 + '|||||';
    let keyArray = keyString.split('|');
    let reverseKeyArray = keyArray.reverse();
    let reverseKeyString = salt + '|' + status + '|' + reverseKeyArray.join('|');
    let cryp = crypto.createHash('sha512');
    cryp.update(reverseKeyString);
    let calchash = cryp.digest('hex');
    let msg = 'Payment failed for Hash not verified...';
    if (calchash == resphash) {
        msg = 'Transaction Successful and Hash Verified...';
        let timest = moment().format("DD-MM-YY") + " @ " + moment().format(" HH-mm-ss");
        let psave = new pubgregistermodule({
            name: firstname,
            email: email,
            gameid: gameid,
            phone: mobile,
            paymentid: txnid,
            timestamp: timest,
            status: status
        })
        psave.save(function (err, PubgRegiatration) {
            if (err) return console.error(err);
            console.log("saved registration of pubg mobile at " + timest + " at number : " + regnop);
            regnop++;
            regmodule.updateMany({ regnop: regnop }).then(
                docc => {
                    regnop: regnop
                })
        });
        mailer.Register(req.body)
    }
    res.render('succreg', {
        txnid: txnid, amt: amount,
        name: firstname, email: email, status: status, resphash: resphash, msg: msg, gameid: gameid
    });
});


//freefire data
Router.post('/freefireresult', function (req, res) {
    let key = req.body.key;
    let salt = req.body.salt;
    let txnid = req.body.txnid;
    let amount = req.body.amount;
    let productinfo = req.body.productinfo;
    let firstname = req.body.firstname;
    let email = req.body.email;
    let udf5 = req.body.udf5;
    let mihpayid = req.body.mihpayid;
    let status = req.body.status;
    let resphash = req.body.hash;
    let gameid = req.body.gameid;
    let mobile = req.body.mobile;
    let keyString = key + '|' + txnid + '|' + amount + '|' + productinfo + '|' + firstname + '|' + email + '|||||' + udf5 + '|||||';
    let keyArray = keyString.split('|');
    let reverseKeyArray = keyArray.reverse();
    let reverseKeyString = salt + '|' + status + '|' + reverseKeyArray.join('|');
    let cryp = crypto.createHash('sha512');
    cryp.update(reverseKeyString);
    let calchash = cryp.digest('hex');
    let msg = 'Payment failed for Hash not verified...';
    if (calchash == resphash) {
        msg = 'Transaction Successful and Hash Verified...';
        let timest = moment().format("DD-MM-YY") + " @ " + moment().format(" HH-mm-ss");
        let psave = new freefireregistermodule({
            name: firstname,
            email: email,
            gameid: gameid,
            phone: mobile,
            paymentid: txnid,
            timestamp: timest,
            status: status
        })
        psave.save(function (err, FreefireRegiatration) {
            if (err) return console.error(err);
            console.log("saved registration of freefire at " + timest + " at number : " + regnop);
            regnof++;
            regmodule.updateMany({ regnof: regnof }).then(
                docc => {
                    regnop: regnof
                })
        });
        mailer.Register(req.body)
    }
    res.render('succreg', {
        txnid: txnid, amt: amount,
        name: firstname, email: email, status: status, resphash: resphash, msg: msg, gameid: gameid
    });
});

module.exports=Router