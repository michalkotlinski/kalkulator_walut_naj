{
  const calculateRate = (currency) => {
    const rateEUR = 4.43;
    const rateUSD = 4.05;
    const rateGBP = 5.15;
    const rateCHF = 4.62;
    const rateCNY = 0.56;

    switch (currency) {
      case "EUR":
        return rateEUR;

      case "USD":
        return rateUSD;

      case "GBP":
        return rateGBP;

      case "CHF":
        return rateCHF;

      case "CNY":
        return rateCNY;
    }
  };

  const updateResultText = (result, currency, rate) => {
    const courseElement = document.querySelector(".js-course");
    const resultElement = document.querySelector(".js-result");
    courseElement.innerText = `1 ${currency} = ${rate} PLN`;
    resultElement.innerHTML = ` <strong>${result.toFixed(2)}</strong>`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const rate = calculateRate(currency);
    const result = amount / rate;

    updateResultText(result, currency, rate);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
