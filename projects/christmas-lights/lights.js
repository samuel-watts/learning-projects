const checkBoxContainer = document.querySelector(".checkbox-container");
const lightSwitch = document.querySelector(".light-switch");
const lightContainer = document.querySelector(".lights");
const lightSwitchState = document.querySelector(".light-switch-state");
const lightSwitchLabels = { on: "off", off: "on" };
const lightBulbs = lightContainer.querySelectorAll(".light");
const intervalControl = document.querySelector(".interval-control");

checkBoxContainer.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  lightSwitch.click();
});

lightSwitch.addEventListener("change", () => {
  // Toggle the "on" class on the light container
  lightContainer.classList.toggle("on");

  // Update the light switch state text
  lightSwitchState.textContent =
    lightSwitchLabels[lightSwitchState.textContent] || "on";
});

intervalControl.addEventListener("change", (e) => {
  const multiplier = parseFloat(e.target.value);
  lightBulbs.forEach((lightBulb) => {
    const originalDuration = parseFloat(
      getComputedStyle(lightBulb).animationDuration
    );
    lightBulb.style.animationDuration = `${originalDuration / multiplier}s`;
  });
});
