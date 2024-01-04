function reveal() {
    var elements = document.querySelectorAll('.fade-in');
    for (var i = 0; i < elements.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = elements[i].getBoundingClientRect().top;
      var elementVisible = 150; // Adjust this value based on your needs
  
      if (elementTop < windowHeight - elementVisible) {
        elements[i].classList.add('visible');
      } else {
        elements[i].classList.remove('visible');
      }
    }
  }
  
  window.addEventListener('scroll', reveal);
  