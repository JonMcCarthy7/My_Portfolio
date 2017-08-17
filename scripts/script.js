$(document).ready(function(){

function myAge() {
  var d = new Date();
  var n = d.getFullYear() - 1993;
  document.getElementById('age').innerHTML = n;
  return n;
}

    myAge();

    $('#typeIt').typeIt({
      breakLines: false,
      speed: 50,
      autoStart: false,
      startDelay: 1000
    })
    .tiType('Full-Stack Developer')
    .tiPause(2000)
    .tiDelete()
    .tiType('Coffee Connoisseur')
    .tiPause(2000)
    .tiDelete()
    .tiType('Musician')
    .tiPause(2000)
    .tiDelete()
    .tiType('Food Lover')
    .tiPause(2000)
    .tiDelete()
    .tiType('Traveler')
    .tiPause(2000)
    .tiDelete()
    .tiType('Thrill Seeker')
    .tiPause(2000)
    .tiDelete()
    .tiType('Full-Stack Developer');


    $('#example2').typeIt({
     strings: ["This is a great string.", "But here is a better one."],
     speed: 50,
     breakLines: false,
     autoStart: false
});



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
            scrollTop: target.offset().top
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
});
