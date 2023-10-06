// let randomNumber = Math.floor(Math.random() * 11);
let randomNumber = 9;
let btn = document.getElementById("button");
let text = document.getElementById("entry");
let output = document.getElementById("result");
let guessOutput = document.getElementById("text");
let restart = document.getElementById("reset");

let correctGuess = randomNumber;

btn.addEventListener("click", () => {
  if (text.value == "") {
    return undefined;
  }

  if (text.value == correctGuess) {
    output.innerHTML = `<p><strong>Your guess is correct: ${text.value}.</strong></p>`;

    guessOutput.innerHTML = `<p><strong>Guess: ${randomNumber}</strong></p>`;
  } else {
    output.innerHTML = `<p><strong>Wrong guess..</strong></p>`;
  }
});
restart.addEventListener("click", () => {
  window.location.reload();
});
