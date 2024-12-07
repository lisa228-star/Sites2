const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Функция для перемещения шара в случайное место
function moveBall() {
  const gameArea = document.getElementById('gameArea');
  const gameWidth = gameArea.offsetWidth;
  const gameHeight = gameArea.offsetHeight;

  const ballSize = ball.offsetWidth;

  const newX = Math.random() * (gameWidth - ballSize);
  const newY = Math.random() * (gameHeight - ballSize);

  ball.style.left = `${newX}px`;
  ball.style.top = `${newY}px`;
}

// Обработчик клика по шару
ball.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveBall();
});

// Переместить шар при загрузке игры
moveBall();
