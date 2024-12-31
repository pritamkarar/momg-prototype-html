const navbar = document.querySelector("#navbarSupportedContent");
const backDrop = document.querySelector(".back-drop");
const togglerBtn = document.querySelector(".navbar-toggler");
const closeIcon = document.querySelector(".close-icon");
const header = document.querySelector("header");

function closeNavbar() {
  navbar.style.transform = "translateX(300px)";
  backDrop.style.right = "-100%";
}

togglerBtn.addEventListener("click", function () {
  navbar.style.transform = "translateX(0px)";
  backDrop.style.right = "0";
});

closeIcon.addEventListener("click", closeNavbar);
backDrop.addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
