// Scroll reveal
const sections = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

sections.forEach(sec => observer.observe(sec));

// Active navbar link
const links = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach(sec => {
    if (pageYOffset >= sec.offsetTop - 150) {
      current = sec.id;
    }
  });

  links.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

