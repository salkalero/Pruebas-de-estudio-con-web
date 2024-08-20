// scripts.js

document.addEventListener("DOMContentLoaded",() => {

    const burger = document.querySelector(".burger");
    const ulNav = document.querySelector(".ulHeader");

    burger.addEventListener("click",(e) => {

        ulNav.classList.toggle("active");

    })
    document.addEventListener("click",(e) => {

        
        if (!burger.contains(e.target) && !ulNav.contains(e.target)) {

            ulNav.classList.remove("active");

        }
    })
});
