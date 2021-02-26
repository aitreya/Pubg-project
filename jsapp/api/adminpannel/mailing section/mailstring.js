const pubgregistermodule = require('./../../modules').pubgregistermodule
const freefireregistermodule = require('./../../modules').freefireregistermodule

function convert(number, code) {
    let str = 'Reg' + number
    if (code == 1) {
        str += 'p'
    }
    else if (code == 2) {
        str += 'f'
    }
    else {
        str = 'err';
    }
    return str
}

async function mailstring(data) {
    let start = data.start,
        end = data.end,
        code = data.code
    if (code == 1) {
        let str = '';
        for (let i = start; i <= end; i++) {
            let regid = convert(i, 1)
            await pubgregistermodule.findOne({ 'paymentid': regid }).then(doc => {
                str += doc.email + ','
            }).catch((err) => {
                str='ERR : '+err
            })
        }
        return str
    } else if (code == 2) {
        let str = '';
        for (let i = start; i <= end; i++) {
            let regid = convert(i, 2)
            await freefireregistermodule.findOne({ 'paymentid': regid }).then(doc => {
                str += doc.email + ','
            }).catch((err) => {
                str='ERR : '+err
            })
        }
        return str
    } else {
        return false
    }
}

module.exports = {
    generateMailString: mailstring
}