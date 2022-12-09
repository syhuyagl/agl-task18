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
    
    $('.c-top').mouseenter(function(){
      $('.c-top__button1').removeClass('is-show')
      $('.c-top__button2').addClass('is-show')
    })
    $('.c-top').mouseleave(function(){
      $('.c-top__button1').addClass('is-show')
      $('.c-top__button2').removeClass('is-show')
    })
    $(".c-top").click(function () {
      console.log("#1312");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    })
  });
