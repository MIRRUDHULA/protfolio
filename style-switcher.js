document.addEventListener("DOMContentLoaded", function() {
    const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

    styleSwitcherToggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    });
});
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternateStyles=document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}





document.addEventListener("DOMContentLoaded", function() {
    const dayNight = document.querySelector(".day-night");
    const icon = dayNight.querySelector("i");

    updateIcon();

    dayNight.addEventListener("click", function() {
        document.body.classList.toggle("dark");
        updateIcon();
    });

    function updateIcon() {
        if (document.body.classList.contains("dark")) {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }
});


