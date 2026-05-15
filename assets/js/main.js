// DMax Capital - Main Scripts

const ham = document.getElementById('ham');
const mobMenu = document.getElementById('mob-menu');
if (ham && mobMenu) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mobMenu.classList.toggle('open');
  });
  mobMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      mobMenu.classList.remove('open');
    });
  });
}
window.addEventListener("scroll", () => {
  document.getElementById("nav").classList.toggle("scrolled", window.scrollY > 50);
});

const obs = new IntersectionObserver(e => {
  e.forEach(x => {
    if (x.isIntersecting) x.target.classList.add("vis");
  });
}, { threshold: 0.08 });

document.querySelectorAll(".fu, .fu2").forEach(el => obs.observe(el));

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async e => {
    e.preventDefault();
    const btn = document.getElementById("fsub");
    btn.textContent = "Sending...";
    btn.disabled = true;

    const data = Object.fromEntries(new FormData(contactForm));
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (json.success) {
        btn.textContent = "Message Sent ✓";
        btn.style.background = "#2C6E49";
        contactForm.reset();
        setTimeout(() => { btn.textContent = "Send Message →"; btn.style.background = ""; btn.disabled = false; }, 4000);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      btn.textContent = "Error — Try Again";
      btn.style.background = "#c0392b";
      setTimeout(() => { btn.textContent = "Send Message →"; btn.style.background = ""; btn.disabled = false; }, 4000);
    }
  });
}
