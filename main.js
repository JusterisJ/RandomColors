let button = document.querySelector(`.changeColor`);
let buttonMouseOver = document.querySelector(`.changeColorMouseOver`);
let pressedKey = document.querySelector(`.pressedKey`);
function random() {
  return Math.floor(Math.random() * (255 - 1 + 1)) + 1;
}

button.addEventListener(`click`, function () {
  document.body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
});
// 1 Button when moused over changes body background color
buttonMouseOver.addEventListener(`mouseover`, function () {
  document.body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
});
// 2 Displays which key was pressed and its keyCode
document.addEventListener(`keypress`, function (event) {
  pressedKey.textContent = `You pressed ${event.key} (KeyCode is ${event.keyCode})`;
});

// 3 Changes body color when typing in input field
document.querySelector(`.input1`).addEventListener(`keypress`, function () {
  document.body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
});
