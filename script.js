const guessButton = document.getElementById('guessButton');
   const guessInput = document.getElementById('guessInput');
   const resultText = document.getElementById('resultText');
   const restartButton = document.getElementById('restartButton');

   let randomNumber = Math.floor(Math.random() * 100) + 1;
   let attempts = 0;

   guessButton.addEventListener('click', () => {
       const userGuess = parseInt(guessInput.value);
       attempts++;

       if (userGuess === randomNumber) {
           resultText.textContent = `Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток!`;
           guessButton.disabled = true;
           restartButton.style.display = 'block';
       } else if (userGuess < randomNumber) {
           resultText.textContent = 'Слишком маленькое! Попробуй снова.';
       } else {
           resultText.textContent = 'Слишком высокое! Попробуй снова.';
       }
   });

   restartButton.addEventListener('click', () => {
       randomNumber = Math.floor(Math.random() * 100) + 1;
       attempts = 0;
       guessButton.disabled = false;
       resultText.textContent = '';
       guessInput.value = '';
       restartButton.style.display = 'none';
   });