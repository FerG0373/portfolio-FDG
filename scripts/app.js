document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".header__menu__link");
    const currentURL = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href").includes(currentURL)) {
            link.classList.add("active");
        }
    });
});