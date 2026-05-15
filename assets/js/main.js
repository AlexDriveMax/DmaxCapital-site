// DMax Capital - Main Scripts
window.addEventListener("scroll", () => {
  document.getElementById("nav").classList.toggle("scrolled", window.scrollY > 50);
});

const obs = new IntersectionObserver(e => {
  e.forEach(x => {
    if (x.isIntersecting) x.target.classList.add("vis");
  });
}, { threshold: 0.08 });

document.querySelectorAll(".fu, .fu2").forEach(el => obs.observe(el));

const fsub = document.getElementById("fsub");
if (fsub) fsub.addEventListener("click", e => {
  e.preventDefault();
  const b = e.target;
  b.textContent = "Message Sent ✓";
  b.style.background = "#2C6E49";
  setTimeout(() => {
    b.textContent = "Send Message →";
    b.style.background = "";
  }, 3000);
});
