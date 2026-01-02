// ======= CONFIG =======
// Put your YouTube/Vimeo embed URL here (example formats):
// YouTube: https://www.youtube.com/embed/VIDEO_ID
// Vimeo:   https://player.vimeo.com/video/VIDEO_ID
const VIDEO_EMBED_URL = ""; // <-- paste your embed URL here

// ======================

// Mobile menu
const burger = document.querySelector(".nav__burger");
const mobile = document.getElementById("mobileMenu");

if (burger && mobile) {
  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
    mobile.hidden = expanded;
  });

  mobile.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      mobile.hidden = true;
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reveal on scroll (Framer-like)
const reveals = Array.from(document.querySelectorAll(".reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

reveals.forEach(el => io.observe(el));

// Video embed hookup
const iframe = document.getElementById("videoEmbed");
if (iframe && VIDEO_EMBED_URL.trim()) {
  iframe.src = VIDEO_EMBED_URL.trim();
}

// Form guard (prevents "not connected" confusion)
const form = document.getElementById("leadForm");
const statusEl = document.getElementById("formStatus");

if (form && statusEl) {
  form.addEventListener("submit", (e) => {
    const action = form.getAttribute("action") || "";
    if (action.includes("REPLACE_WITH_YOUR_ID")) {
      e.preventDefault();
      statusEl.textContent = "Form not connected yet. Replace the Formspree ID in index.html to receive messages.";
    }
  });
}
