const sysinfo = require('./sysinfo/sysinfo');
const cpuinfo = require('./sysinfo/cpuinfo');
const sendregistrationdata = require('./sendregistrationdata')
let mailresponce = 'Not yet got the responce'

function connections(server) {
    let io = server
    io.on('connection', socket => {
        setInterval(() => {
            socket.emit('getsys', {
                mem: sysinfo.send().mem,
                uptime: sysinfo.send().uptime
            })
        }, 999);
        socket.on('getmailresponce', () => {
            socket.emit('recievemailresponce',mailresponce)
        })
        socket.on('getregistrationdata',()=>{
            sendregistrationdata.getdata().then(data=>{
                socket.emit('recieveregistrationdata',data)
            })
        })
    });
    cpuinfo.cpu(server)
}
function mailresponceupdate(updatedata) {
    mailresponce=updatedata;
}



module.exports = {
    connection: connections,
    mailresponceupdate: mailresponceupdate,
}
