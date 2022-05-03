const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    switch (item.id) {
      case "clear":
        display.innerText = "";
        break;
      case "backspace":
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
        break;
      case "equal":
        if (display.innerText != "") {
          display.innerText = Function("return " + display.innerText)();
        } else if (display.innerText === "") {
          display.innerText = "Empty value";
          setTimeout(() => (display.innerText = ""), 2500);
        }
        break;
      default:
        display.innerText += item.id;
    }
  };
});

const themeToggle = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggle.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggle.classList.toggle("active");
  isDark = !isDark;
};
