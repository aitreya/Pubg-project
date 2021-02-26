const os = require('os');
var cpu, mem, uptime;
function cal() {
    cpu = os.cpus();
    mem = 100 - ((os.freemem / os.totalmem) * 100).toString().substring(0, 4)
    uptime = caluptime(os.uptime())
    return {
        mem: mem,
        uptime: uptime
    }
}
function caluptime(data) {
    let hours, min, sec, days;
    sec = data;
    min = conv(sec / 60);
    hours = conv(min / 60);
    days = conv(hours / 24).toString();
    hours = hours - (days * 24)
    min = min - (((days * 24) + hours) * 60);
    sec = sec - ((days * 86400) + (hours * 3600) + (min * 60));
    return {
        days: days,
        hours: hours,
        min: min,
        sec: sec
    }
}
function conv(data) {
    let str = data.toString()
    let dotpos = str.indexOf(".")
    if (dotpos == -1) {
        return (str)
    }
    str = str.substring(0, dotpos)
    return (str)
}

module.exports = {
    send: cal,
    details : {
        cpuname: os.cpus()[0].model,
        cpucores:os.cpus().length,
        totalram: (os.totalmem()/(1024*1024*1024)).toString().substring(0,4)+' GB',
        os : os.type()
    }
}

