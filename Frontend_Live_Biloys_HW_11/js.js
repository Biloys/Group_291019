const lighter = document.querySelectorAll(".circle");
let activeLight = 0;

const showLight = () => {
  lighter[activeLight].classList.add("active");
};
const hideLight = () => {
  lighter[activeLight].classList.remove("active");
};

showLight();
const increse = () => {
  hideLight();
  if (activeLight + 1 < lighter.length) {
    activeLight += 1;
  } else {
    activeLight = 0;
  }
  showLight();
};

setInterval(increse, 1000);
