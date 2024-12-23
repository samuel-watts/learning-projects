const checkBoxContainer = document.querySelector(".checkbox-container");
const lightSwitch = document.querySelector(".light-switch");
const lightContainer = document.querySelector(".lights");
const lightSwitchState = document.querySelector(".light-switch-state");
const lightSwitchLabels = { on: "off", off: "on" }; // Fixed object name to match your explanation

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
