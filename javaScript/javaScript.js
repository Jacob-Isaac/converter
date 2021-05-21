{
  const inputElement = document.querySelector(".js-input");
  const resultElement = document.querySelector(".js-result");
  const multiplierElement = document.querySelector(".js-multiplier");
  let condition = Boolean(true);

  const changeCurrencyFlag = () => {
    const toggleFlagResult = document.querySelector(".js-toggleFlagResult");
    const toggleFlagInput = document.querySelector(".js-toggleFlagInput");

    const polishFlag = "images/pln.png";
    const usaFlag = "images/usd.png";

    if (condition === true) {
      condition = false;
      toggleFlagInput.src = usaFlag;
      toggleFlagResult.src = polishFlag;
    } else if (condition === false) {
      condition = true;
      toggleFlagInput.src = polishFlag;
      toggleFlagResult.src = usaFlag;
    } else {
      condition = false;
      toggleFlagInput.src = usaFlag;
      toggleFlagResult.src = polishFlag;
    }
  };
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
    resultElement.focus();
    if (
      condition === false &&
      multiplierElement.value <= 100 &&
      inputElement.value <= 999999999999
    ) {
      const plnResult = inputElement.value * multiplierElement.value;
      resultElement.value = plnResult.toFixed(2);
    }
    if (
      condition === true &&
      multiplierElement.value <= 100 &&
      inputElement.value <= 999999999999
    ) {
      const usdResult = inputElement.value / multiplierElement.value;
      resultElement.value = usdResult.toFixed(2);
    } 
  };
  const onSwitchButtonClick = () => {
    inputElement.focus();
    inputElement.value = 0;
    resultElement.value = 0;
    multiplierElement.value = 3.8;
    changeCurrencyText();
    changeCurrencyFlag();
  };
  const onFormConverter = (event) => {
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
