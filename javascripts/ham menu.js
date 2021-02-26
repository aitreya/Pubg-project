let ham = document.getElementById("ham");
let navphone = document.getElementById("navphone");
let cicoham = document.getElementById("cicoham");
let hindex = document.getElementById("hindex");
let hreg = document.getElementById("hreg");
let hnoti = document.getElementById("hnoti");
let hvid = document.getElementById("hvid");
let habout = document.getElementById("habout");
ham.addEventListener("click", function toggleshow() {
        navphone.style.animationName = 'slideout';
        navphone.style.animationDuration = '150ms';
        navphone.style.webkitAnimationTimingFunction = 'ease-in-out';
        navphone.style.display = 'block';
        navphone.style.animationFillMode = 'forwards';
})
cicoham.addEventListener("click", function toggleHide() {
        navphone.style.animationName = 'slidein';
        navphone.style.animationDuration = '100ms';
        navphone.style.webkitAnimationTimingFunction = 'ease-in-out';
        setTimeout(function ne() {
            navphone.style.display = 'none';
        }, 99);
    
})