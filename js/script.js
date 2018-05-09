const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses');

let game;

const render = () => {
  puzzleElement.innerHTML = ''
  guessesElement.textContent = game.statusMessage;

  game.puzzle.split('').forEach((letter) => {
    letterEl = document.createElement('span');
    letterEl.textContent = letter;
    puzzleElement.appendChild(letterEl);
  });
}

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  render();
});

const startGame = async () => {
  const puzzle = await getPuzzle('1');
  game = new Hangman(puzzle, 5);
  render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();