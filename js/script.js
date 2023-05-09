console.log("Cześć Wszystkim!");

let buttonElement = document.querySelector(".header__buttonDeleteJob");
let headerElement = document.querySelector(".header__headingjob");

buttonElement.addEventListener("click", () => {
  headerElement.remove();
  buttonElement.remove();
});

let changebBackgroundButton = document.querySelector(
  ".changebBackgroundButton"
);
let body = document.querySelector("body");
let button = document.querySelector("button");
button.addEventListener("click", () => {
  body.classList.toggle("darkBackground");

  changebBackgroundButton.innerText = body.classList.contains("darkBackground")
    ? "jasny"
    : "ciemny";
});
