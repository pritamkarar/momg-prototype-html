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
new WOW().init();

(function ($) {
  "use strict";
  function centerY() {
    jQuery(".full-height").each(function () {
      var dh = jQuery(window).innerHeight();
      jQuery(this).css("min-height", dh);
    });
  }
  function load_owl() {
    jQuery("#banner-carousel").owlCarousel({
      center: false,
      items: 1,
      rewind: true,
      margin: 25,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
      dots: false,
    });
  }

  jQuery(document).ready(function () {
    var $doc_height = jQuery(window).innerHeight();

    $(".full-height").css("min-height", $doc_height);

    centerY();
    load_owl();
  });
})(jQuery);
