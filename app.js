const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("mouseenter", (event) => {
    clearActiveClasses();

    slide.classList.add("active");
  });
}

const clearActiveClasses = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};
