let scrollPosition = 0;
const $body = document.querySelector("body");
$(document).ready(function () {
  $(".c-mainvisual__slider").slick({
    fade: true,
    speed: 1100,
    infinite: true,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  });
  var init = {
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    fade: true,
    speed: 1100,
    infinite: true,
    autoplay: false,
    arrows: true,
    prevArrow: $(".c-actual__arrowleft"),
    nextArrow: $(".c-actual__arrowright"),
  };
  $(window).on("load resize orientationchange", function () {
    $(".c-actual__items").each(function () {
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() >= 768) {
        if ($carousel.hasClass("slick-initialized")) {
          $carousel.slick("unslick");
        }
      } else {
        if (!$carousel.hasClass("slick-initialized")) {
          $carousel.slick(init);
        }
      }
    });
  });
  $(".c-top").mouseenter(function () {
    $(".c-top__button1").removeClass("is-show");
    $(".c-top__button2").addClass("is-show");
  });
  $(".c-top").mouseleave(function () {
    $(".c-top__button1").addClass("is-show");
    $(".c-top__button2").removeClass("is-show");
  });
  $(".c-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  $(".c-mainvisual__scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: document.body.scrollHeight,
      },
      1000
    );
  });
  $(function () {
    $(window).scroll(function () {
      if ($(window).width() > 1023) {
        var headerHeight = $(".c-header").height();
        if ($(this).scrollTop() > headerHeight) {
          $(".c-header__fixedwrapper")
            .addClass("is-show")
            .removeClass("is-hidden");
          $(".c-top").removeClass("is-hidden").removeClass("c-top--moveup");
        } else {
          $(".c-header__fixedwrapper")
            .addClass("is-hidden")
            .removeClass("is-show");
          $(".c-top").addClass("c-top--moveup");
        }
      } else {
        $(".c-header__fixedwrapper").addClass("is-hidden");
      }
    });
  });
  function preventDefault(e) {
    e.preventDefault();
  }
  function disableScroll() {
    var ycoord = $(window).scrollTop();
    $(".c-header__overlay").data("ycoord", ycoord);
    ycoord = ycoord * -1;
    $("body")
      .css("position", "fixed")
      .css("left", "0px")
      .css("right", "0px")
      .css("top", ycoord + "px");
  }
  function enableScroll() {
    $("body")
      .css("position", "")
      .css("left", "auto")
      .css("right", "auto")
      .css("top", "auto");
    $(window).scrollTop($(".c-header__overlay").data("ycoord"));
  }
  $(".c-header__menu").click(function () {
    if (!$(".c-header__open").hasClass("is-hidden")) {
      $(".c-header__open").addClass("is-hidden");
      $(".c-header__close").removeClass("is-hidden");
      $(".c-header__overlay").removeClass("is-hidden");
      disableScroll();
    } else {
      $(".c-header__close").addClass("is-hidden");
      $(".c-header__open").removeClass("is-hidden");
      $(".c-header__overlay").addClass("is-hidden");
      enableScroll();
    }
  });
  if ($(location).attr("pathname").includes("contact.html")) {
    $(".c-footer").addClass("u-contactft");
  } else {
    $(".c-footer").removeClass("u-contactft");
  }
  $(".c-header__dropdown1").click(function () {
    $(".c-header__menuitems").addClass("is-hidden");
    $(".c-header__droplist1").removeClass("is-hidden");
  });
  $(".c-header__dropdown2").click(function () {
    $(".c-header__menuitems").addClass("is-hidden");
    $(".c-header__droplist2").removeClass("is-hidden");
  });
  $(".c-header__back").click(function () {
    $(".c-header__droplist").addClass("is-hidden");
    $(".c-header__menuitems").removeClass("is-hidden");
  });
  var $form = $("form");
  $.validator.addMethod(
    "noSpacing",
    function (value, element) {
      if ($.trim(value).length == 0) {
        return false;
      } else {
        return true;
      }
    },
    "????????????????????????????????????"
  );
  $form.validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        digits: true,
      },
      content: {
        required: true,
        noSpacing: true,
      },
    },
    messages: {
      name: "???????????????????????????????????????",
      email: "????????????????????????????????????????????????????????????",
      phone: "??????????????????????????????????????????",
      content: "????????????????????????????????????",
    },
  });
});
