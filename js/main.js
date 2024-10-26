const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (event) {
  if (
    !navbarNav.contains(event.target) &&
    !hamburgerMenu.contains(event.target)
  ) {
    navbarNav.classList.remove("active");
  }
});
