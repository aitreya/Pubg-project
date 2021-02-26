const os = require('os');
var res;

function getCPUInfo() {
    var cpus = os.cpus();

    var user = 0;
    var nice = 0;
    var sys = 0;
    var idle = 0;
    var irq = 0;
    var total = 0;

    for (var cpu in cpus) {
        user += cpus[cpu].times.user;
        nice += cpus[cpu].times.nice;
        sys += cpus[cpu].times.sys;
        irq += cpus[cpu].times.irq;
        idle += cpus[cpu].times.idle;
    }

    var total = user + nice + sys + idle + irq;

    return {
        'idle': idle,
        'total': total
    };
}
function cpUsage(){
    var stats1 = getCPUInfo();
    var startIdle = stats1.idle;
    var startTotal = stats1.total;

    setTimeout(() => {
        var stats2 = getCPUInfo();
        var endIdle = stats2.idle;
        var endTotal = stats2.total;
		
        var idle 	= endIdle - startIdle;
        var total 	= endTotal - startTotal;
        var perc	= idle / total;
        var use = ((1-perc)*100).toString().trim().substring(0,4)
        res=use;
    }, 1000);
}

function cpu(info) {
    var io = info
    io.on('connection', socket => {
            setInterval(() => {
                cpUsage()
                setTimeout(() => {
                    socket.emit('cpuUpdate',res)
                }, 1000);
            }, 3000);
    });
}

module.exports={
    cpu:cpu,
    getCPUInfo:getCPUInfo
}