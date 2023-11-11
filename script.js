var input = document.querySelector(".CalculatorScreen");
document.addEventListener("click", (e) => {
  btn = e.target;
  if (btn.classList.contains("op")) {
    console.log(btn.innerText);
  }
});
