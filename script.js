// Scroll fade animation
const sections = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  observer.observe(sec);
});

// Active navbar link
const navLinks = document.querySelectorAll(".navbar a");
const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  allSections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Certificate fullscreen preview
document.querySelectorAll(".certificate-card img").forEach(img => {
  img.addEventListener("click", () => {
    const viewer = document.createElement("div");
    viewer.style.position = "fixed";
    viewer.style.inset = 0;
    viewer.style.background = "rgba(0,0,0,0.9)";
    viewer.style.display = "flex";
    viewer.style.alignItems = "center";
    viewer.style.justifyContent = "center";
    viewer.style.zIndex = 9999;

    const fullImg = document.createElement("img");
    fullImg.src = img.src;
    fullImg.style.maxWidth = "90%";
    fullImg.style.maxHeight = "90%";
    fullImg.style.borderRadius = "10px";

    viewer.appendChild(fullImg);
    viewer.onclick = () => viewer.remove();
    document.body.appendChild(viewer);
  });
});
