const showingBoxes = document.querySelectorAll(".box");

const bottomTrigger = window.innerHeight * (5 / 4);

showBoxes();

window.addEventListener("scroll", showBoxes);

function showBoxes() {
  showingBoxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    if (boxTop < bottomTrigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
