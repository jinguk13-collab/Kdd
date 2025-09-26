// script.js

// Contoh: animasi tombol scroll ke paket
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Contoh: tambah shadow navbar saat scroll
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("shadow-lg", "bg-black/70");
  } else {
    nav.classList.remove("shadow-lg", "bg-black/70");
  }
});
