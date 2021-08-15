const btn = document.querySelector(".hex-code button");
const spanColorCode = document.querySelector("#hexColor");
const body = document.querySelector("body");

let changeColor = () => {
  let hexColorArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  let colorCode = "";

  for (let i = 0; i < 6; i++) {
    colorCode =
      colorCode +
      hexColorArray[Math.floor(Math.random() * hexColorArray.length)];
  }

  spanColorCode.innerHTML = colorCode;
  body.style.background = "#" + colorCode;
};

btn.addEventListener("click", () => {
  changeColor();
});
