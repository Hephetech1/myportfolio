 // AOS.init();


window.addEventListener("scroll", function () {
        var home= document.getElementById("home");
        var navbar= 
document.getElementById("navbar");
if (window.scrollY > 50) {
  navbar.classList.add("bg-dark");
  home.classList.add("mt-4");
  navbar.classList.remove("bg-light");
} else {
  navbar.classList.remove("bg-dark", "text-white|");

}

      });
     


          const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });