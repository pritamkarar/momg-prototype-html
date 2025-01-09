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

  var v_count = "0";

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
  function de_counter() {
    jQuery(".timer").each(function () {
      var imagePos = jQuery(this).offset().top;
      var topOfWindow = jQuery(window).scrollTop();
      if (imagePos < topOfWindow + jQuery(window).height() && v_count == "0") {
        jQuery(function ($) {
          // start all the timers
          jQuery(".timer").each(count);

          function count(options) {
            v_count = "1";
            var $this = jQuery(this);
            options = $.extend(
              {},
              options || {},
              $this.data("countToOptions") || {}
            );
            $this.countTo(options);
          }
        });
      }
    });
  }

  function menu_arrow() {
    // mainmenu create span
    jQuery("#mainmenu li a").each(function () {
      if ($(this).next("ul").length > 0) {
        $("<span></span>").insertAfter($(this));
      }
    });
    // mainmenu arrow click
    jQuery("#mainmenu > li > span").on("click", function () {
      var iteration = $(this).data("iteration") || 1;
      switch (iteration) {
        case 1:
          $(this).addClass("active");
          $(this).parent().find("ul:first").css("height", "auto");
          var curHeight = $(this).parent().find("ul:first").height();
          $(this).parent().find("ul:first").css("height", "0");
          $(this).parent().find("ul:first").animate(
            {
              height: curHeight,
            },
            300,
            "easeOutQuint"
          );
          $("header").css(
            "height",
            $("#mainmenu")[0].scrollHeight + curHeight + parseInt($tmp_h) * 2
          );
          break;
        case 2:
          var curHeight = $(this).parent().find("ul:first").height();
          $(this).removeClass("active");
          $(this).parent().find("ul:first").animate(
            {
              height: "0",
            },
            300,
            "easeOutQuint"
          );
          $("header").css(
            "height",
            $("#mainmenu")[0].scrollHeight - curHeight + parseInt($tmp_h) * 2
          );
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data("iteration", iteration);
    });
    jQuery("#mainmenu > li > ul > li > span").on("click", function () {
      var iteration = $(this).data("iteration") || 1;
      switch (iteration) {
        case 1:
          $(this).addClass("active");
          $(this).parent().find("ul:first").css("height", "auto");
          $(this)
            .parent()
            .parent()
            .parent()
            .find("ul:first")
            .css("height", "auto");
          var curHeight = $(this).parent().find("ul:first").height();
          $(this).parent().find("ul:first").css("height", "0");
          $(this).parent().find("ul:first").animate(
            {
              height: curHeight,
            },
            400,
            "easeInOutQuint"
          );
          break;
        case 2:
          $(this).removeClass("active");
          $(this).parent().find("ul:first").animate(
            {
              height: "0",
            },
            400,
            "easeInOutQuint"
          );
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data("iteration", iteration);
    });

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

    jQuery(".nft__item_like").on("click", function () {
      var iteration = $(this).data("iteration") || 1;

      switch (iteration) {
        case 1:
          $(this).find("i").addClass("active");
          var val = parseInt($(this).find("span").text()) + 1;
          $(this).find("span").text(val);
          break;
        case 2:
          $(this).find("i").removeClass("active");
          var val = parseInt($(this).find("span").text()) - 1;
          $(this).find("span").text(val);
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data("iteration", iteration);
    });

    jQuery(".play-pause").on("click", function () {
      var iteration = $(this).data("iteration") || 1;
      var track = $(this).parent().parent().find(".track");
      var circle = $(this).parent().parent().parent().find(".circle-ripple");

      switch (iteration) {
        case 1:
          track[0].play();
          $(this).addClass("pause");
          $(this).removeClass("play");
          circle.fadeIn();
          break;
        case 2:
          track[0].pause();
          $(this).addClass("play");
          $(this).removeClass("pause");
          circle.fadeOut();
          break;
      }

      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data("iteration", iteration);
    });

    jQuery("#de-click-menu-profile").on("click", function () {
      var iteration = $(this).data("iteration") || 1;

      switch (iteration) {
        case 1:
          $("#de-submenu-profile").show();
          $("#de-submenu-profile").addClass("open");
          $("#de-submenu-notification").removeClass("open");
          $("#de-submenu-notification").hide();
          $("#de-click-menu-notification").data("iteration", 1);
          break;
        case 2:
          $("#de-submenu-profile").removeClass("open");
          $("#de-submenu-profile").hide();
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data("iteration", iteration);
    });

    jQuery("#de-click-menu-notification").on("click", function () {
      var iteration = $(this).data("iteration") || 1;

      switch (iteration) {
        case 1:
          $("#de-submenu-notification").show();
          $("#de-submenu-notification").addClass("open");
          $("#de-submenu-profile").removeClass("open");
          $("#de-submenu-profile").hide();
          $("#de-click-menu-profile").data("iteration", 1);
          break;
        case 2:
          $("#de-submenu-notification").removeClass("open");
          $("#de-submenu-notification").hide();
          break;
      }
      iteration++;
      if (iteration > 2) iteration = 1;
      $(this).data("iteration", iteration);
    });
  }

  function custom_elements() {
    // --------------------------------------------------
    // tabs
    // --------------------------------------------------
    jQuery(".de_tab").find(".de_tab_content > div").hide();
    jQuery(".de_tab").find(".de_tab_content > div:first").show();
    jQuery("li").find(".v-border").fadeTo(150, 0);
    jQuery("li.active").find(".v-border").fadeTo(150, 1);
    jQuery(".de_nav li").on("click", function () {
      jQuery(this).parent().find("li").removeClass("active");
      jQuery(this).addClass("active");
      jQuery(this).parent().parent().find(".v-border").fadeTo(150, 0);
      jQuery(this).parent().parent().find(".de_tab_content > div").hide();
      var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
      jQuery(this)
        .parent()
        .parent()
        .find(".de_tab_content > div:eq(" + indexer + ")")
        .fadeIn(); //uses whatever index the link has to open the corresponding box
      jQuery(this).find(".v-border").fadeTo(150, 1);
    });
    // request quote function
    var rq_step = 1;
    jQuery("#request_form .btn-right").on("click", function () {
      var rq_name = $("#rq_name").val();
      var rq_email = $("#rq_email").val();
      var rq_phone = $("#rq_phone").val();
      if (rq_step == 1) {
        if (rq_name.length == 0) {
          $("#rq_name").addClass("error_input");
        } else {
          $("#rq_name").removeClass("error_input");
        }
        if (rq_email.length == 0) {
          $("#rq_email").addClass("error_input");
        } else {
          $("#rq_email").removeClass("error_input");
        }
        if (rq_phone.length == 0) {
          $("#rq_phone").addClass("error_input");
        } else {
          $("#rq_phone").removeClass("error_input");
        }
      }
      if (rq_name.length != 0 && rq_email.length != 0 && rq_phone.length != 0) {
        jQuery("#rq_step_1").hide();
        jQuery("#rq_step_2").fadeIn();
      }
    });
    // --------------------------------------------------
    // tabs
    // --------------------------------------------------
    jQuery(".de_review").find(".de_tab_content > div").hide();
    jQuery(".de_review").find(".de_tab_content > div:first").show();
    //jQuery('.de_review').find('.de_nav li').fadeTo(150,.5);
    jQuery(".de_review").find(".de_nav li:first").fadeTo(150, 1);
    jQuery(".de_nav li").on("click", function () {
      de_size();
      jQuery(this).parent().find("li").removeClass("active");
      //jQuery(this).parent().find('li').fadeTo(150,.5);
      jQuery(this).addClass("active");
      jQuery(this).fadeTo(150, 1);
      jQuery(this).parent().parent().find(".de_tab_content > div").hide();
      var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
      jQuery(this)
        .parent()
        .parent()
        .find(".de_tab_content > div:eq(" + indexer + ")")
        .show(); //uses whatever index the link has to open the corresponding box
    });
    // --------------------------------------------------
    // toggle
    // --------------------------------------------------
    jQuery(".toggle-list h2").addClass("acc_active");
    jQuery(".toggle-list h2").toggle(
      function () {
        jQuery(this).addClass("acc_noactive");
        jQuery(this).next(".ac-content").slideToggle(200);
      },
      function () {
        jQuery(this).removeClass("acc_noactive").addClass("acc_active");
        jQuery(this).next(".ac-content").slideToggle(200);
      }
    );
    // --------------------------------------------------
    // toggle
    // --------------------------------------------------
    jQuery(".expand-custom .toggle").click(function () {
      jQuery(this).stop().toggleClass("clicked");
      jQuery(this)
        .stop()
        .parent()
        .parent()
        .parent()
        .find(".details")
        .slideToggle(500);
    });
  }

  function de_countdown() {
    $(".de_countdown").each(function () {
      var y = $(this).data("year");
      var m = $(this).data("month");
      var d = $(this).data("day");
      var h = $(this).data("hour");
      $(this).countdown({ until: new Date(y, m - 1, d, h) });
    });
  }

  jQuery(document).ready(function () {
    "use strict";
    jQuery(window).on("scroll", function () {
      de_counter();
    });
  });

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
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  de_countdown();
  custom_elements();
  menu_arrow();
  centerY();
  load_owl();
  dropdown("#item_category");
  dropdown("#buy_category");
  dropdown("#items_type");
  dropdown("#select_scheme");
  dropdown("#select_lang");
  dropdown("#item_collection");
  $("#mainmenu > li:has(ul)").addClass("menu-item-has-children");
  $("#mainmenu li:has(ul)").addClass("has-child");
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
