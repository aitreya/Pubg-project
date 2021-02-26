const mailstring = require('./mailstring')
const socetconnections = require('../socetsconnentions')
const mailer = require('../../mailer')


async function sendmail(ob) {
    var mailrecipients;
    await mailstring.generateMailString({
        start:ob.startno,
        end:ob.endno,
        code:ob.game
    }).then((data)=>{
        mailrecipients=data
    })
    if (mailrecipients==false||mailrecipients.toString().substring(0,3)==='ERR') {
        socetconnections.mailresponceupdate(mailrecipients)
    }
    else{
        mailer.batchmail({
            mailString:mailrecipients,
            date:ob.date,
            time:ob.time
        })
    }
}

module.exports={
    sendmail:sendmail
}