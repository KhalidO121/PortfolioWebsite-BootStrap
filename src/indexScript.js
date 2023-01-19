function reveal() {
    var reveals = document.querySelectorAll(".hidden");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 160;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("show");
      } else {
        reveals[i].classList.remove("show");
      }
    }
  }

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();