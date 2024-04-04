let button = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");
let section = document.querySelector("#section");
let title = document.querySelector("#title");
function btnClick() {
  button2.disabled = false;

  if (+title.textContent == 10) {
    button.setAttribute("disabled", "true");
  } else {
    title.textContent++;
  }
}
button.setAttribute("onclick", "btnClick()");

function btnClick2() {
  button.disabled = false;

  if (+title.textContent == -10) {
    button2.setAttribute("disabled", "true");
  } else {
    title.textContent--;
  }
}

button2.setAttribute("onclick", "btnClick2()");

//color

function RandomColor() {
  let randomNum1 = Math.floor(Math.random() * 180);
  let randomNum2 = Math.floor(Math.random() * 255);
  let randomNum3 = Math.floor(Math.random() * 255);

  return `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
}

section.style.backgroundColor = RandomColor();
section.style.backgroundimage =
  "linear-gradient(43deg, #RandomColor 0%, #RandomColor RandomColor%)";
