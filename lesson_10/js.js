const lightRed = document.querySelector(".lighter__light_red");
const lightYellow = document.querySelector(".lighter__light_yellow");
const lightGreen = document.querySelector(".lighter__light_green");

lightRed.addEventListener("click", () => {
  lightRed.style.backgroundColor = "red";
  lightYellow.style.backgroundColor = "transparent";
  lightGreen.style.backgroundColor = "transparent";
});
lightYellow.addEventListener("click", () => {
  lightRed.style.backgroundColor = "transparent";
  lightYellow.style.backgroundColor = "yellow";
  lightGreen.style.backgroundColor = "transparent";
});
lightGreen.addEventListener("click", () => {
  lightRed.style.backgroundColor = "transparent";
  lightYellow.style.backgroundColor = "transparent";
  lightGreen.style.backgroundColor = "green";
});
