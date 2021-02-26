const modules = require("../modules");
const pubgregistermodule = modules.pubgregistermodule;
const freefireregistermodule = modules.freefireregistermodule;

async function getdata() {
    let pubgdata;
    let freefiredata;
    await pubgregistermodule
        .find({})
        .then((doc) => {
            pubgdata = doc;
        })
        .catch();
    await freefireregistermodule
        .find({})
        .then((doc) => {
            freefiredata = doc;
        })
        .catch();
    let ob = {
        pubgdata: pubgdata,
        freefiredata: freefiredata
    }
    return ob
}

module.exports={
    getdata : getdata
}