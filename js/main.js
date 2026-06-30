// =====================
// TOPBAR SCROLL EFFECT
// =====================
var topbar = document.querySelector(".topbar");

if (topbar) {
  window.addEventListener(
    "scroll",
    function () {
      topbar.classList.toggle("scrolled", window.scrollY > 50);
    },
    { passive: true }
  );
}

// =====================
// SMOOTH SCROLL PARA LINKS INTERNOS
// =====================
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// =====================
// LAZY LOADING PARA IMAGENES
// =====================
if ("IntersectionObserver" in window) {
  var imageObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach(function (img) {
    imageObserver.observe(img);
  });
}
