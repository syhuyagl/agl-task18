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
        breakpoint: 727,
        settings: {
          dots: false,
        },
      },
    ],
  });
  $(".c-actual__items").slick({
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
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick",
      },
    ],
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
  function preventDefault(e) {
    e.preventDefault();
  }

  function disableScroll() {
    document.body.addEventListener("touchmove", preventDefault, {
      passive: false,
    });
  }
  function enableScroll() {
    document.body.removeEventListener("touchmove", preventDefault);
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
});
