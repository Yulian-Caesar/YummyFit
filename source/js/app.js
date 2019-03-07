// nick-everhard
$(function() {
  /* тогглер для карточек отзывов */
  var $togglerCollection = $('button.review-toggler');
  var $textCollection = $('.review-text');

  $togglerCollection.click(function() {
    var $this = $(this);
    var $thisText = $this.siblings().find('.review-text');

    if (!$thisText.hasClass('review-text_visible')) {
      $togglerCollection.removeClass('review-toggler_active');
      $this.toggleClass('review-toggler_active');
      $textCollection.removeClass('review-text_visible');
      $thisText.toggleClass('review-text_visible');
      return;
    }

    if ($thisText.hasClass('review-text_visible')) {
      $togglerCollection.removeClass('review-toggler_active');
      $textCollection.removeClass('review-text_visible');
      return;
    }

  });

  /* инициализация карусели для отзывов */
  var $reviewsCarousel = $('.reviews-list');
  var $reviewsCarouselSettings = {
    slidesToShow: 3,
    prevArrow: $('.reviews-carousel-button_prev'),
    nextArrow: $('.reviews-carousel-button_next'),
    appendArrows: $('.reviews-navigation'),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  $reviewsCarousel.on('beforeChange', function(){
    $togglerCollection.removeClass('review-toggler_active');
    $textCollection.removeClass('review-text_visible');
  });
  
  $reviewsCarousel.slick($reviewsCarouselSettings);

});
