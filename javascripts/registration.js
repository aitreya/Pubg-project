let regpubg = document.getElementById("regpubg");
let regfree = document.getElementById("regfree");
let regs = document.getElementsByClassName('regs');
regpubg.addEventListener("click",function all()
{
    let gofront = confirm("Do you want to register for match of Pubg Mobile ?");
    if(gofront)
    window.open("https://forms.gle/JUKdZnAkvL9H63x69");

})
regfree.addEventListener("click",function all()
{
    let gofront = confirm("Do you want to register for match of FreeFire ?");
    if(gofront)
    {
        window.open( "https://forms.gle/DZwHd23CEwL4ao9g9");
    }
})