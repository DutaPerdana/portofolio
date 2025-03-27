// JavaScript for smooth scroll functionality
document.querySelectorAll(".cta-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: document.querySelector(".portfolio").offsetTop,
      behavior: "smooth",
    });
  });
});
