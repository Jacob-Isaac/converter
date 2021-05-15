{
  const plnElement = document.querySelector(".js-PLNinput");
  const usdElement = document.querySelector(".js-USDinput");
  const multiplierElement = document.querySelector(".js-multiplier");
  let condition = Boolean(true);

  const changeCurrencyFlag = () => {
    const toggleFlagUSD = document.querySelector(".js-toggleFlagUsd");
    const toggleFlagPLN = document.querySelector(".js-toggleFlagPln");

    const polishFlag = "images/pln.png";
    const usaFlag = "images/usd.png";

    if (condition === true) {
      condition = false;
      toggleFlagPLN.src = usaFlag;
      toggleFlagUSD.src = polishFlag;
    } else if (condition === false) {
      condition = true;
      toggleFlagPLN.src = polishFlag;
      toggleFlagUSD.src = usaFlag;
    } else {
      condition = false;
      toggleFlagPLN.src = usaFlag;
      toggleFlagUSD.src = polishFlag;
    }
  }
  const changeCurrencyText = () => {
    const formLegend = document.querySelector(".js-form__legend");

    formLegend.classList.toggle("form__legend--toggle");

    if (formLegend.classList.contains("form__legend--toggle")) {
      formLegend.innerText = "USD/PLN";
    } else {
      formLegend.innerText = "PLN/USD";
    }
  };
  const onConverterButtonClick = () => {
    usdElement.focus();
    if (
      condition === false &&
      multiplierElement.value <= 100 &&
      plnElement.value <= 999999999999
    ) {
      const plnResult = plnElement.value * multiplierElement.value;
      usdElement.value = plnResult.toFixed(2);
    }
    if (
      condition === true &&
      multiplierElement.value <= 100 &&
      plnElement.value <= 999999999999
    ) {
      const usdResult = plnElement.value / multiplierElement.value;
      usdElement.value = usdResult.toFixed(2);
    }
  };
  const onSwitchButtonClick = () => {
    plnElement.focus();
    plnElement.value = 0;
    usdElement.value = 0;
    multiplierElement.value = 3.8;
    changeCurrencyText();
    changeCurrencyFlag();
  };
  const onFormConverter = () => {
    event.preventDefault();
    console.log(condition);
  };
  const init = () => {
    const converterButton = document.querySelector(".js-converter__button");
    const switchButton = document.querySelector(".js-button");
    const formConverter = document.querySelector(".js-converter");
    converterButton.addEventListener("click", onConverterButtonClick);
    switchButton.addEventListener("click", onSwitchButtonClick);
    formConverter.addEventListener("submit", onFormConverter);
  };
  init();
}
