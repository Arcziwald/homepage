{
  const welcome = () => {
    console.log("Witam wszystkich");
  };

  const onButtonClick = () => {
    const body = document.querySelector(".js-body");
    const changeBackgroundButton = document.querySelector(
      ".changeBackgroundButton"
    );

    body.classList.toggle("darkBackground");
    changeBackgroundButton.innerText = body.classList.contains("darkBackground")
      ? "jasny"
      : "ciemny";
  };

  const init = () => {
    const buttonElement = document.querySelector(".header__buttonDeleteJob");
    const headerElement = document.querySelector(".header__headingjob");
    const button = document.querySelector("button");

    buttonElement.addEventListener("click", onButtonClick);
    button.addEventListener("click", onButtonClick);
    headerElement.remove();
    buttonElement.remove();
  };

  welcome();

  init();
}
