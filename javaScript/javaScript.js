let plnElement = document.querySelector(".js-pln");
let usdElement = document.querySelector(".js-usd");
let multiplierElement = document.querySelector(".js-multiplier");
let formConverter = document.querySelector(".js-converter");
let converterButton = document.querySelector(".js-converter__button");
let switchButton = document.querySelector(".js-button");
let toggleFlagUSD = document.querySelector(".js-toggleFlagUsd");
let toggleFlagPLN = document.querySelector(".js-toggleFlagPln");
let formLegend = document.querySelector(".js-form__legend");
let condition = Boolean(true);
let polishFlag = "https://i.imgur.com/b2WRy5m.pngg";
let usaFlag = "https://i.imgur.com/4Xbu5BB.png";

formConverter.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(condition);
});

converterButton.addEventListener("click", () => {
  usdElement.focus();
  if (
    condition === false &&
    multiplierElement.value <= 100 &&
    plnElement.value <= 999999999999
  ) {
    let plnResult = plnElement.value * multiplierElement.value;
    usdElement.value = plnResult.toFixed(2);
  }
  if (
    condition === true &&
    multiplierElement.value <= 100 &&
    plnElement.value <= 999999999999
  ) {
    let usdResult = plnElement.value / multiplierElement.value;
    usdElement.value = usdResult.toFixed(2);
  }
});

switchButton.addEventListener("click", () => {
  plnElement.focus();
  plnElement.value = 0;
  usdElement.value = 0;
  multiplierElement.value = 3.8;

  formLegend.classList.toggle("form__legend--toggle");

  if (formLegend.classList.contains("form__legend--toggle")) {
    formLegend.innerText = "USD/PLN";
  } else {
    formLegend.innerText = "PLN/USD";
  }

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
});

