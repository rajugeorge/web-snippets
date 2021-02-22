const openButton = document.querySelector(".open_btn");
const closeButton = document.querySelector(".close_btn");
const nav = document.querySelector(".navigation");

console.log("hi this is not cool f");

openButton.addEventListener("click", () => {
    nav.classList.add("nav-open");
});

closeButton.addEventListener("click", () => {
    nav.classList.remove("nav-open");
});

window.onresize = function (e) {
    if (window.matchMedia("(min-width: 600px)").matches) {
        nav.classList.remove("nav-open");
    }
};
