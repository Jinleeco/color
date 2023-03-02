const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const btnChange = document.querySelector("button#btnChange");

function handleBackgroundColor() {
  const randomNum1 = Math.floor(Math.random() * colors.length);
  let randomNum2 = Math.floor(Math.random() * colors.length);

  while (randomNum1 === randomNum2) {
    randomNum2 = Math.floor(Math.random() * colors.length);
  }

  const color1 = colors[randomNum1];
  const color2 = colors[randomNum2];

  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

btnChange.addEventListener("click", handleBackgroundColor);
