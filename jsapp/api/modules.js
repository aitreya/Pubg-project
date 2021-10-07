const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

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
    paymentid: String,
    timestamp: String,
    status: String
});
var pubgregistermodule = mongoose.model('PubgRegiatration', pubgresisterschema);

//freefire work
var freefireresisterschema = new mongoose.Schema({
    name: String,
    email: String,
    gameid: String,
    phone: String,
    paymentid: String,
    timestamp: String,
    status: String
});
var freefireregistermodule = mongoose.model('FreefireRegiatration', freefireresisterschema);

//registartion number
var regsch = new mongoose.Schema({
    name: String,
    regnop: String,
    regnof: String,
},{collection: 'Regmodule'});
var regmodule = mongoose.model('Regmodule', regsch);

const Schema = mongoose.Schema;
const UserDetail = new Schema({
    username: String,
    password: String
});
UserDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');


module.exports={
    Qmodule:Qmodule,
    pubgregistermodule:pubgregistermodule,
    freefireregistermodule:freefireregistermodule,
    regmodule:regmodule,
    UserDetails:UserDetails
}