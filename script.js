// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark Mode Toggle (single, safe handler)
const darkToggle = document.getElementById("darkToggle");
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    // toggle a single class used by our CSS: dark-mode
    document.body.classList.toggle("dark-mode");
  });
}

// Back to Top Button
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
}

// Profile Picture Animation (guarded)
window.addEventListener("load", () => {
  const profilePic = document.querySelector(".animate-pic");
  if (profilePic) profilePic.classList.add("show");
});
