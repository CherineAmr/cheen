// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  toggle.textContent = open ? "close" : "menu";
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
    toggle.textContent = "menu";
  })
);

// Fade sections in as you scroll
const sections = document.querySelectorAll(".section");
sections.forEach((s) => s.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
sections.forEach((s) => observer.observe(s));

// Click-to-play YouTube videos (shows the thumbnail until clicked)
document.querySelectorAll(".yt").forEach((el) => {
  el.addEventListener("click", () => {
    el.innerHTML =
      '<iframe src="https://www.youtube.com/embed/' + el.dataset.id +
      '?autoplay=1&rel=0" title="' + (el.dataset.title || "YouTube video") +
      '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  }, { once: true });
});

// Contact form: send through Web3Forms without leaving the page
const form = document.getElementById("contact-form");
if (form) {
  const status = form.querySelector(".form-status");
  const btn = form.querySelector('button[type="submit"]');
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form-status";
    const data = new FormData(form);
    const captcha = data.get("h-captcha-response");
    if (captcha !== null && !captcha) {
      status.textContent = "Please complete the human check.";
      status.classList.add("error");
      return;
    }
    btn.disabled = true;
    status.textContent = "Sending…";
    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      status.textContent = "Thank you — your message has been sent.";
      form.reset();
      if (window.hcaptcha) window.hcaptcha.reset();
    } catch (err) {
      status.textContent = "Sorry, the message couldn’t be sent. Please try again.";
      status.classList.add("error");
    } finally {
      btn.disabled = false;
    }
  });
}
