let helpbtn = document.getElementById("helpbtn");
let helpcon = document.getElementById("helpcon");
let name = document.getElementById("name");
let email = document.getElementById("email");
let quear = document.getElementById("quear");
let cico = document.getElementById("cico");
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
        // email.value = "";
        quear.value = "";
    }
})
cico.addEventListener("click",function cl() {
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
function postToGoogle() {
    var field1 = $("#name").val();
    var field2 = $("#email").val();
    var field3 = $("#quear").val();
    var sumcc = document.getElementById("succ");
    console.log(field1);
    console.log(field2);
    console.log(field3);

    $.ajax({
        url: "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfKwpSukOgOUJCSWSbSttFWD3GdqrCTNIdOnhobvAWO5iwVoA/formResponse",
        data: { "entry.1168356574": field1, "entry.1041394139": field2, "entry.1232027923": field3 },
        type: "POST",
        dataType: "xml",
        success: function (d) {
        },
        error: function (x, y, z) {
            $('#succ').show();
            $('#form').hide();
            $('#brr').hide();
            setTimeout(function nee() {
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
            }, 10000);
        }
    });
    return false
}