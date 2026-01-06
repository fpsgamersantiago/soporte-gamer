console.log("Soporte Gamer cargado correctamente");

// Botón WhatsApp (debug)
const btn = document.getElementById("btn-whatsapp");
if (btn) {
  btn.addEventListener("click", () => {
    console.log("Click en WhatsApp");
  });
}

// Topbar scroll effect
const topbar = document.querySelector(".topbar");

if (topbar) {
  window.addEventListener("scroll", () => {
    topbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}

