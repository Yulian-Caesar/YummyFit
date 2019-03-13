// nick-everhard

var addReviewClass = function () {
    $(this).parent('.review').toggleClass('active');
};

$(document).on('click', '.review-toggler', addReviewClass);


$(function() {
  /* инициализация карусели для отзывов */
  var $reviewsCarousel = $('.reviews-list');
  var $reviewsCarouselSettings = {
    slidesToShow: 3,
    prevArrow: $('.reviews-carousel-button_prev'),
    nextArrow: $('.reviews-carousel-button_next'),
    appendArrows: $('.reviews-navigation'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
          breakpoint: 640,
          settings: {
              slidesToShow: 1
          }
      }
    ]
  };
  
  $reviewsCarousel.on('beforeChange', function(){
      $('.review').removeClass('active');
  });
  
  $reviewsCarousel.slick($reviewsCarouselSettings);

});
