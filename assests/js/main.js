const navbar = document.querySelector("#navbarSupportedContent");
const backDrop = document.querySelector(".back-drop");
const togglerBtn = document.querySelector(".navbar-toggler");
const closeIcon = document.querySelector(".close-icon");
const header = document.querySelector("header");

function initializeDropdown(dropdown) {
  const optionsContainer = dropdown.querySelector("ul");
  const optionsList = dropdown.querySelectorAll("li");
  const arrow = dropdown.querySelector("svg");
  const display = dropdown.querySelector(".selected-display");

  // Toggle dropdown on click
  dropdown.addEventListener("click", (e) => {
    const isActive = dropdown.classList.contains("active");

    // If clicked on an option, do not toggle open/close logic here.
    if (e.target.tagName === "LI") {
      return;
    }

    handleDropdown(dropdown, arrow, !isActive);
  });

  // Update the selected display and close dropdown on option click
  optionsList.forEach((option) => {
    option.addEventListener("click", () => {
      display.innerHTML = option.innerHTML;
      handleDropdown(dropdown, arrow, false); // Close dropdown
    });
  });

  // Close dropdown when clicking outside
  window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      handleDropdown(dropdown, arrow, false);
    }
  });
}

// Function to handle dropdown state
function handleDropdown(dropdown, arrow, open) {
  if (open) {
    dropdown.classList.add("active");
    arrow.classList.add("rotated");
  } else {
    dropdown.classList.remove("active");
    arrow.classList.remove("rotated");
  }
}

// Initialize dropdown
const singleDropdown = document.querySelector(".wrapper-dropdown");
initializeDropdown(singleDropdown);

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

(function ($) {
  "use strict";

  var imJs = {
    m: function (e) {
      imJs.d();
      imJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      imJs.stickyAdjust();
      imJs.rncounterUp();
    },

    stickyAdjust: function (e) {
      // Sticky Top Adjust..,
      $(".rbt-sticky-top-adjust").css({
        top: 100,
      });

      $(".rbt-sticky-top-adjust-two").css({
        top: 200,
      });
      $(".rbt-sticky-top-adjust-three").css({
        top: 25,
      });
      $(".rbt-sticky-top-adjust-four").css({
        top: 90,
      });
      $(".rbt-sticky-top-adjust-five").css({
        top: 100,
      });
    },

    rncounterUp: function () {
      var odo = $(".odometer");

      // Check if the appear plugin is loaded
      if (!$.fn.appear) {
        console.error("jQuery Appear plugin is not loaded.");
        return;
      }

      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    },
  };

  imJs.m();
})(jQuery, window);
