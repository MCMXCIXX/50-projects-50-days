const jokeBlock = document.getElementById("joke");

const jokeButton = document.getElementById("jokeBtn");

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeBlock.innerText = data.joke;
}
generateJoke();

jokeButton.addEventListener("click", generateJoke);
