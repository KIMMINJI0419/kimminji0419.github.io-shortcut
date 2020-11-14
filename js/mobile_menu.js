
var nav = document.querySelector("div.navigation");
function ClickbtnNav(e){
    nav.classList.toggle("active");
}
nav.addEventListener("click", ClickbtnNav);