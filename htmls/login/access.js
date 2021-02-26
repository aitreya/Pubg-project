var keys=require("./keys")
var usernames=keys.users;
var password=keys.pass;
function grant(user,pass){
    user=user.trim();
    pass=pass.trim();
    var userpresent = false;
    var userposition = 0;
    var passmatch=false;
    var msg="";
    var code =0;
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i].toUpperCase()==user.toUpperCase()) {
            userpresent=true;
            userposition=i;
            break;
        }
    }
    if (userpresent) {
        var passch=password[userposition];
        if (passch===pass) {
            passmatch=true;
        }
    }
    else{
        userposition=-2;
    }
    var details={
        userpresence : userpresent,
        userpos:(userposition+1),
        passwordmatch : passmatch
    }
    if (userpresent&&passmatch) {
        msg="Successful login !! Access granted"
        code=2;
    }
    else if(userpresent&&(passmatch==false)){
        msg="Wrong password please try again"
        code=1;
    }
    else{
        msg="No such user detected please check your username or contact administrator"
        code=0;
    }
    ob={
        message:msg,
        code:code,
        details:details
    }
    return ob 
}
module.exports = grant;
