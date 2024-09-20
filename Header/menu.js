const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuSum = doc.querySelector(".menuSum");

menuOpen.addEventListener("click", () => {
  if (menuSum.classList.contains("menuSumactive")) {
    menuSum.classList.remove("menuSumactive");
  } else {
    menuSum.classList.add("menuSumactive");
  }
});

window.addEventListener("resize", () => {
  if (window.getComputedStyle(menuOpen).display === "none") {
    menuSum.classList.remove("menuSumactive");
  }
});
