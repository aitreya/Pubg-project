let helpbtn = document.getElementById("helpbtn");
let helpcon = document.getElementById("helpcon");
let name = document.getElementById("name");
let email = document.getElementById("email");
let quear = document.getElementById("quear");
let cico = document.getElementById("cico");
let qebtn = document.getElementById("qebtn");
helpbtn.addEventListener("click", function toggleHide() {
    if (helpcon.style.display == 'inline-block') {
        helpcon.style.animationName = 'hellrev';
        helpcon.style.animationDuration = '150ms';
        helpcon.style.webkitAnimationTimingFunction = 'ease-in-out';
        helpbtn.style.animationName = 'rotatrev';
        helpbtn.style.animationDuration = '120ms';
        helpbtn.style.webkitAnimationTimingFunction = 'ease-in-out';
        helpbtn.style.animationFillMode = 'none';
        setTimeout(function ne() {
            helpcon.style.display = 'none';
        }, 150);
    }
    else {
        helpcon.style.animationName = 'hell';
        helpcon.style.animationDuration = '200ms';
        helpcon.style.webkitAnimationTimingFunction = 'ease-in-out';
        helpbtn.style.animationName = 'rotat';
        helpbtn.style.animationDuration = '200ms';
        helpbtn.style.webkitAnimationTimingFunction = 'ease-in-out';
        helpcon.style.display = 'inline-block';
        helpbtn.style.animationFillMode = 'forwards';
        $('#form').show();
        $('#brr').show();
        $('#succ').hide();
        name.value = "";
        email.value = "";
        quear.value = "";
    }
})
cico.addEventListener("click", function cl() {
    helpcon.style.animationName = 'hellrev';
    helpcon.style.animationDuration = '150ms';
    helpcon.style.webkitAnimationTimingFunction = 'ease-in-out';
    helpbtn.style.animationName = 'rotatrev';
    helpbtn.style.animationDuration = '120ms';
    helpbtn.style.webkitAnimationTimingFunction = 'ease-in-out';
    helpbtn.style.animationFillMode = 'none';
    setTimeout(function ne() {
        helpcon.style.display = 'none';
    }, 150);
})
qebtn.addEventListener("click", function hid() {
    $('#succ').show();
    $('#form').hide();
    $('#brr').hide();
})
