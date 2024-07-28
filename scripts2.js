const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

next.addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

prev.addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    changeSlide(index);
  });
});

function changeSlide(index) {
  slides[currentSlide].classList.remove("current");
  dots[currentSlide].classList.remove("active");
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add("current");
  dots[currentSlide].classList.add("active");
  updateSlidesPosition();
}

function updateSlidesPosition() {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

updateSlidesPosition();
