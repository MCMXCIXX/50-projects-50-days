const buttonsWrapper = document.getElementById("buttons");

const audioList = document.querySelectorAll("audio");

audioList.forEach((audio) => {
  const btn = document.createElement("button");

  btn.classList.add("btn");
  btn.innerText = audio.getAttribute("id");

  btn.addEventListener("click", () => {
    stopAudio();
    audio.play();
  });

  buttonsWrapper.append(btn);
});

function stopAudio() {
  audioList.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
