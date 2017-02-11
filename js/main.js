const NavbarToggler = selector => {
     const navbar = document.querySelector(selector)
     let latestScrollY = scrollY

     window.addEventListener('scroll', () => {
         const y = scrollY
         const down = y > latestScrollY
         latestScrollY = y

         navbar.classList[down ? 'add' : 'remove']('is-hidden')

         navbar.classList[y >= 100 ? 'add' : 'remove']('is-below')
     })
 }

 NavbarToggler('.js-navbar')

 $(function() {
     $('.scroll').on('click', function() {
         $('html, body').animate({
             scrollTop: 900
         }, 1000);
     });
 });

 $(function() {
     $('#status').css({
         'transform': 'scale(1.2)',
         'opacity': '0'
     });
     $('#preloader').delay(400).fadeOut(2000);
 });