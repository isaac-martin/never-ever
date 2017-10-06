// ==== FOOTER ==== //

// A simple wrapper for all your custom jQuery that belongs in the footer
(function($){
  $(function(){
    // Example integration: JavaScript-based human-readable timestamps
    if ($.timeago) {
      $('time').timeago();
    }
  });

  var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 300}});

    var tweenbuilding = TweenMax.to(".build-wrap", 1, {className: "+=move-build"});
    new ScrollMagic.Scene({triggerElement: "#what-we-do", triggerHook: 'onEnter', offset: 500, duration: 200})
     .setTween(tweenbuilding)
     .addTo(controller);

     var tweenrocket = TweenMax.to(".rocket-wrap", 1, {className: "+=move-rocket"});
       new ScrollMagic.Scene({triggerElement: "#what-we-do", triggerHook: 'onEnter', offset: 500, duration: 200})
      .setTween(tweenrocket)
      .addTo(controller);




  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-78
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $('.top-slider').slick({

    asNavFor: '.bottom-slider',
    arrows: false,
    rtl: true
    // autoplay: true
  });
  $('.bottom-slider').slick({
    asNavFor: '.top-slider',
    arrows: false,
    dots: true,
    // autoplay: true,
    // rtl: true
  });

  $('.left-arrow').click(function(){
     $(".slick-slider").slick('slickPrev');
  });

  $('.right-arrow').click(function(){
       $(".slick-slider").slick('slickNext');
  });

  })(jQuery, this);
