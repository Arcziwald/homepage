{
  const welcome = () => {
  console.log("Witam wszystkich")
}

const onbuttonClick = () => {
  const body = document.querySelector("body");
  const changebBackgroundButton = document.querySelector(".changebBackgroundButton")

  body.classList.toggle("darkBackground");
  changebBackgroundButton.innerText = body.classList.contains("darkBackground")
    ? "jasny"
    : "ciemny";
}

const init = () => {
  const buttonElement = document.querySelector(".header__buttonDeleteJob");
  const headerElement = document.querySelector(".header__headingjob");
  const button = document.querySelector("button");

  buttonElement.addEventListener("click", onbuttonClick);
  button.addEventListener("click", onbuttonClick);
  headerElement.remove();
  buttonElement.remove();
}

welcome();

init();
};