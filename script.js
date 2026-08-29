/* =========================================================
   LEOBERT CAMORO PORTFOLIO
   Vanilla JavaScript only.
   ========================================================= */
 
/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */
 
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
 
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
 
  menuToggle.textContent =
    navLinks.classList.contains("open") ? "×" : "☰";
});
 
// Close mobile navigation after clicking a link.
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});
 
 
/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */
 
const header = document.getElementById("header");
 
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
 
 
/* =========================================================
   ACTIVE NAVIGATION LINK
   ========================================================= */
 
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");
 
const updateActiveNav = () => {
  let current = "";
 
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 130;
 
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
 
  navItems.forEach(item => {
    item.classList.remove("active");
 
    if (item.getAttribute("href") === "#" + current) {
      item.classList.add("active");
    }
  });
};
 
window.addEventListener("scroll", updateActiveNav);
updateActiveNav();
 
 
/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */
 
const revealElements = document.querySelectorAll(".reveal");
 
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);
 
revealElements.forEach(element => {
  revealObserver.observe(element);
});
 
 
/* =========================================================
   CONTACT FORM
 
   Because this portfolio is a single static HTML file with
   no backend, the form uses mailto: to open the visitor's
   default email application.
 
   Change the email below if you update your email address.
   ========================================================= */
 
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
 
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
 
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
 
  const recipient = "Leobert.camoro101@gmail.com";
 
  const emailSubject =
    subject || "Portfolio Website Inquiry";
 
  const emailBody =
    "Hello Leobert,%0D%0A%0D%0A" +
    "Name: " + encodeURIComponent(name) + "%0D%0A" +
    "Email: " + encodeURIComponent(email) + "%0D%0A%0D%0A" +
    encodeURIComponent(message);
 
  formStatus.style.display = "block";
 
  window.location.href =
    "mailto:" +
    recipient +
    "?subject=" +
    encodeURIComponent(emailSubject) +
    "&body=" +
    emailBody;
 
  setTimeout(() => {
    formStatus.style.display = "none";
  }, 5000);
});
 
 
/* =========================================================
   CURRENT YEAR
   ========================================================= */
 
document.getElementById("year").textContent =
  new Date().getFullYear();
 
 
/* =========================================================
   REDUCED MOTION ACCESSIBILITY
   ========================================================= */
 
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.style.scrollBehavior = "auto";
 
  document.querySelectorAll(".reveal").forEach(element => {
    element.style.transition = "none";
    element.classList.add("visible");
  });
}