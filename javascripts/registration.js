let regpubg = document.getElementById("regpubg");
let regfree = document.getElementById("regfree");
let regs = document.getElementsByClassName('regs');
regpubg.addEventListener("click",function all()
{
    let gofront = confirm("Do you want to register for match of Pubg Mobile ?");
    if(gofront)
    window.open("/pubgform","_self");

})
regfree.addEventListener("click",function all()
{
    let gofront = confirm("Do you want to register for match of FreeFire ?");
    if(gofront)
    {
        window.open("freefireform","_self");
    }
})