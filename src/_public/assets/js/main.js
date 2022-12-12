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
  });
  function lockScroll() {
    scrollPosition = window.pageYOffset;
    $body.style.overflow = "hidden";
    $body.style.width = "100%";
  }
  function unlockScroll() {
    $body.style.removeProperty("overflow");
    $body.style.removeProperty("position");
    $body.style.removeProperty("top");
    $body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
  }
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
  $(".c-header__menu").click(function () {
    if (!$(".c-header__open").hasClass("is-hidden")) {
      $(".c-header__open").addClass("is-hidden");
      $(".c-header__close").removeClass("is-hidden");
      lockScroll()
    } else {
      $(".c-header__close").addClass("is-hidden");
      $(".c-header__open").removeClass("is-hidden");
      unlockScroll()
    }
  });
});
