const checkBoxContainer = document.querySelector(".checkbox-container");
const lightSwitch = document.querySelector(".light-switch");
const lightContainer = document.querySelector(".lights");
const lightSwitchState = document.querySelector(".light-switch-state");
const lightSwitchLabels = { on: "off", off: "on" };

const colourPickerOne = document.getElementById("colour-one");
const colourPickerTwo = document.getElementById("colour-two");
const colourPickerThree = document.getElementById("colour-three");
const colourPickerFour = document.getElementById("colour-four");

colourPickerOne.addEventListener("input", function() {
  image.style.filter = `hue-rotate(${this.value}deg)`; 
});

colourPickerTwo.addEventListener("input", function() {
  theme-colour-one.style.filter = `hue-rotate(${this.value}deg)`; 
});

colourPickerThree.addEventListener("input", function() {
  image.style.filter = `hue-rotate(${this.value}deg)`; 
});

colourPickerFour.addEventListener("input", function() {
  image.style.filter = `hue-rotate(${this.value}deg)`; 
});

checkBoxContainer.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  lightSwitch.click();
});

lightSwitch.addEventListener("change", () => {
  lightContainer.classList.toggle("on");

  if (lightContainer.classList.contains("on")) {
    lightSwitchState.textContent = "on";
  } else {
    lightSwitchState.textContent = "off";
  }
});

const lightBulbs = document.querySelectorAll(".light");

// Function to update the speed of the animations
const changeSpeed = (speedMultiplier) => {
  lightBulbs.forEach((lightBulb) => {
    // Get the original duration from CSS
    const originalDuration = parseFloat(
      getComputedStyle(lightBulb).animationDuration
    );
    // Set the new duration
    lightBulb.style.animationDuration = `${
      originalDuration * speedMultiplier
    }s`;
  });
};

// Add event listeners for each speed control button
document.querySelector(".half-speed").addEventListener("click", () => {
  changeSpeed(2); // 2x duration (slower)
});

document.querySelector(".reset-speed").addEventListener("click", () => {
  restartAnimations(); // Restart the original animations
});

document.querySelector(".double-speed").addEventListener("click", () => {
  changeSpeed(0.5); // 0.5x duration (faster)
});

const restartAnimations = () => {
  lightBulbs.forEach((lightBulb) => {
    lightBulb.style.animation = "none";
    lightBulb.offsetHeight;
    lightBulb.style.animation = "";
  });
};
