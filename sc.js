const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else if (button.textContent === "C") {
      display.value = "";
    } else if (button.textContent === "sqrt") {
      display.value = Math.sqrt(parseFloat(display.value));
    } else if (button.textContent === "sin") {
      display.value = Math.sin(parseFloat(display.value));
    } else if (button.textContent === "cos") {
      display.value = Math.cos(parseFloat(display.value));
    } else if (button.textContent === "tan") {
      display.value = Math.tan(parseFloat(display.value));
    } 
    else {
      display.value += button.textContent;
    }
  });
});
