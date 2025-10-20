const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

const stepsListItems = document.querySelectorAll(".steps-list__item");

let currentIndexActive = 1;

prev.addEventListener("click", () => {
  currentIndexActive--;

  if (currentIndexActive <= 1) {
    currentIndexActive = 1;
    prev.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  update();
});

next.addEventListener("click", () => {
  currentIndexActive++;

  if (currentIndexActive >= circles.length) {
    currentIndexActive = circles.length;
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    circle.classList.remove("active");
    if (index < currentIndexActive) {
      circle.classList.add("active");
    }
  });
  stepsListItems.forEach((item, index) => {
    item.classList.remove("active");
    stepsListItems[currentIndexActive - 1].classList.add("active");
  });

  progress.style.width = `${((currentIndexActive - 1) / (circles.length - 1)) * 100}%`;
};
