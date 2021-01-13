const words = ["рыба", "кошка", "картофель", "бегемот", "программа", "сайт"];
// массив слов
const word = words[Math.floor(Math.random() * words.length)];
// Выбор рандомного слова
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
// Оставшиеся буквы
let remainingAttempts = (remainingLetters += 3);
// На каждое слово 3 попытки ошибится
console.log("Start attempts " + remainingAttempts);
//
while (remainingLetters > 0 && remainingAttempts > 0) {
  //
  alert(answerArray.join(" "));
  //
  let guess = prompt(
    "Угадайте букву или нажмите отмена для выхода из игры."
  ).toLowerCase();
  if (guess === null) {
    //
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста введите только одну букву!");
  } else {
    //
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        alert("Отлично вы угадали букву " + guess);
        remainingLetters--;
      }
    }
  }
  remainingAttempts--;
  console.log("Left Remaining " + remainingAttempts);
  //
}
//
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);
