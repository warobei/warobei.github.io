$(function () {
  $(".slider__inner, .news__slider-inner").slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,
  });

  $("input, select").styler();

  $(".header__burger").on("click", function () {
    $(".menu ul").slideToggle();
  });
});
