
const horizontalSlider = document.querySelector(".horizontal");
const vertiCleSlider = document.querySelector(".verticle");
const blurSlider = document.querySelector(".blur");
const colorPicker = document.querySelector(".color");
const shadowBox = document.querySelector(".output");
const shadowTxt = document.querySelector(".shadowTxt");

console.log(shadowBox);

const shadowConfig = {
  horizontal: 4,
  verticle: 4,
  blur: 5,
  selectedColor: "black",
};

shadowBox.style = `box-shadow: ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`;
horizontalSlider.addEventListener("input", (e) => {
  shadowConfig.horizontal = e.target.value;

  shadowTxt.innerHTML = `box-shadow: ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`;

  //   shadowBox.style = ` box-shadow:  ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`
  shadowBox.style = `box-shadow: ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`;
});

vertiCleSlider.addEventListener("input", (e) => {
  shadowConfig.verticle = e.target.value;
  shadowTxt.innerHTML = `box-shadow: ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`;
  //   shadowBox.style =  ` box-shadow:  ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`
  shadowBox.style = `box-shadow: ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`;
});

blurSlider.addEventListener("input", (e) => {
  shadowConfig.blur = e.target.value;
  shadowTxt.innerHTML = `box-shadow: ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`;
  //   shadowBox.style =  ` box-shadow:  ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`
  shadowBox.style = `box-shadow: ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`;
});

colorPicker.addEventListener("input", (e) => {
  shadowConfig.selectedColor = e.target.value;
  selectedEventColor = e.target.value;
  console.log(e.target.value);
  shadowTxt.innerHTML = `box-shadow: ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`;
  shadowBox.style = `box-shadow: ${shadowConfig.horizontal}px ${shadowConfig.verticle}px ${shadowConfig.blur}px ${shadowConfig.selectedColor}`;
});
