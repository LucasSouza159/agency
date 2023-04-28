$(".slider").slick({
  autoplay: true,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
      },
    },
  ],
});
