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
  function dropdown(e) {
    var obj = $(e + ".dropdown");
    var btn = obj.find(".btn-selector");
    var dd = obj.find("ul");
    var opt = dd.find("li");

    obj
      .on("mouseenter", function () {
        dd.show();
        $(this).css("z-index", 1000);
      })
      .on("mouseleave", function () {
        dd.hide();
        $(this).css("z-index", "auto");
      });

    opt.on("click", function () {
      dd.hide();
      var txt = $(this).text();
      opt.removeClass("active");
      $(this).addClass("active");
      btn.text(txt);
    });
  }
  jQuery(document).ready(function () {
    var $doc_height = jQuery(window).innerHeight();

    $(".full-height").css("min-height", $doc_height);

    jQuery(".nft__item_click").on("click", function () {
      var iteration = $(this).data("iteration") || 1;

      switch (iteration) {
        case 1:
          var cover = jQuery(this).parent().parent().find(".nft__item_extra");
          cover.css("visibility", "visible");
          cover.css("opacity", "1");
          break;
        case 2:
          var cover = jQuery(this).parent().parent().find(".nft__item_extra");
          cover.css("visibility", "hidden");
          cover.css("opacity", "0");
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data("iteration", iteration);
    });

    $(".nft__item").mouseleave(function () {
      var cover = jQuery(this).find(".nft__item_extra");
      cover.css("visibility", "hidden");
      cover.css("opacity", "0");
      jQuery(this).find(".nft__item_click").data("iteration", 1);
    });
    centerY();
    load_owl();
    dropdown("#item_category");
    dropdown("#buy_category");
    dropdown("#items_type");
  });
})(jQuery);
