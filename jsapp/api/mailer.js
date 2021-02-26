const nodemailer = require('nodemailer');
const socetsconnentions = require('./adminpannel/socetsconnentions')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'gamerewards101@gmail.com',
        clientId: '587922206539-0v21bg3kfeoe1ualqgjarv0rsaegr2d7.apps.googleusercontent.com',
        clientSecret: 'JPBBpeZfDYvs_-NgNyoILhCl',
        refreshToken: '1//04FppcW8WXyRCCgYIARAAGAQSNwF-L9IrCxrPpKfsQ1lXRdGMzVm7xBsfJ4M2CqixF6bwkpfqilewViNO0q-aKJDaBHgbfO4gMgw',
        accessToken: 'ya29.a0AfH6SMAWAYyClFSK0E2L6BhOFL9DTe0UlC8sx6_gXlYnrtTjJcJzo2vdbMf3lrjx0VMJr_GGGXXHGQDXoqFHxT1bCq491u5f_gR18tIRs4mTXFTDGvrn_mV3GQUHcfYSnrKn3-YkaGuqulr0AB5Bs8a_yHY4y7DEHsQ'
    }
});

function sendMail(object) {

    let txnid = object.txnid;
    let firstname = object.firstname;
    let email = object.email;

    let text = 'Hey ' + firstname + ', Your registration for the game in GameRewards.tech has been successful and you will get the room id and password 15min before the match on ' + email + ' and please keep a note of your registration id ' + txnid + '.';
    let text2 = 'If you have any query or problem you can always mail us on support@gamerewards.tech only because this is an automated mail and you mails which are sent to this email will not be viewed by our team.';
    let text3 = 'Thankyou...'

    let final_html = '<h3>' + text + '<br>' + text2 + '<br>' + text3;


    var mailOptions = {
        from: 'GameRewards.tech  <gamerewards101@gmail.com>',
        to: email,
        subject: 'Registation Successfull for Gamerewards.com',
        html: final_html,
    };

    transporter.sendMail(mailOptions, function (error, info) {});
}
async function batchmail(object) {
    let part1html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Registration details</title><style>*{margin: 5px 0;padding: 0;font-family: Arial, Helvetica, sans-serif;text-align: center;}img{width: 40%;max-width: 100px;}</style></head><body><img src="https://gamerewards.tech/logo.png" alt="Gamerewards.tech"><h4>The match that you have registered on Gamerewards.tech for has been scheduled on `
    let part2html = ' at '
    let part3html = ` </h4><a href="https://gamerewards.tech/Notification">Click here</a> to check More details.<p>**this is an automated mail please don't reply to it ,If you want support mail <a href="mailto:support@gamerewards.tech?subject=Hello i have contacted you regarging gamerewards.tech">here</a></p></body></html>`
    let mailString = object.mailString;
    let date = object.date;
    let time = object.time;
    let final_html = part1html + date + part2html + time + part3html


    let mailOptions = {
        from: 'GameRewards.tech  <gamerewards101@gmail.com>',
        to: mailString,
        subject: 'Match details for your registration on Gamerewards.tech',
        html: final_html,
    };

    transporter.sendMail(mailOptions,function (error, info) {
            if (error) {
                socetsconnentions.mailresponceupdate(error)
            }
            else {
                socetsconnentions.mailresponceupdate(info)
            }
        });
}

module.exports = {
    Register: sendMail,
    batchmail: batchmail,
};