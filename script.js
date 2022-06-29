const hambuger = document.querySelector(".menu-icons");
const navlist = document.querySelector(".nav-list");
hambuger.addEventListener("click", () => {

    hambuger.classList.toggle("acctive");
    navlist.classList.toggle("active");
});