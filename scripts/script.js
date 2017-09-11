$(document).ready(function(){

 $('#trans').on('click', function () {
   $(this).fadeOut(function () {
     $(this).text(($(this).text() ==  "Herzlich willkommen auf meiner portfolio,") ? "Welcome to my portfolio," : "Herzlich willkommen auf meiner portfolio,").fadeIn();
   })
 });

  function myAge(jsYear, jsMonth, jsDate) {
    var d = new Date();
    var n = d.getFullYear() - jsYear;
    if (d.getMonth() >= jsMonth && d.getDate() >= jsDate) {
      n+= 1;
    };
    return n;
  }

  document.getElementById('age').innerHTML = myAge(1993, 4, 19);

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
  .tiType('Adrenaline Junkie')
  .tiPause(2000)
  .tiDelete()
  .tiType('Full-Stack Developer');




    // Smooth Scroll
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
