/**
 * @param {HTMLElement} root
 * @param {string} color
 * @param {number} size
 * @param {number} time
 */
//задание 1 одна лампа
function getRandomNumber(maxValue = 256) {
  const randomNumber = Math.floor(Math.random() * maxValue);
  return randomNumber;
}
const getRandomColor = () =>
  `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;

function getRandomTimer(minValue = 0, maxValue = 3000) {
  const randomTimer = Math.floor(Math.random() * maxValue);
  return randomTimer;
}

// arrow function

const createLamp = (root, color = "red", size = 50, time = 1000) => {
  const btn = document.createElement("button");
  btn.classList.add("btn-dynamic", "btn");
  btn.style.height = size + "px";
  btn.style.width = size + "px";
  const timer = () => {
    btn.style.backgroundColor = getRandomColor();
  };
  setInterval(timer, getRandomTimer());
  root.appendChild(btn);
};

/**
 *
 * @param {HTMLElement} root
 * @param {number} count
 */
//задание 2 герлянда

const christmasLights = (root, count = 20) => {
  const container = document.querySelector("#lighter");
  for (let i = 0; i < count; i++) {
    createLamp(container);
  }
};

christmasLights(document.querySelector("#lighter"), 15);
