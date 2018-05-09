const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses');

let game;

const render = () => {
  puzzleElement.textContent = game.puzzle;
  guessesElement.textContent = game.statusMessage;
}

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  render();
});

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  game = new Hangman(puzzle, 5);
  render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();