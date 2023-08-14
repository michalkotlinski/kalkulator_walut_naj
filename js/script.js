{
  const result = document.querySelector(".js-result");

  const currencyOutputElement = document.querySelector(".js-currency-output");

  const showResult = (currencyOutput) => {
    result.innerText =
      "Wynik: " +
      calculateResult(currencyOutputElement.value).toFixed(2) +
      " " +
      currencyOutput;
  };

  const calculateResult = (currencyOutput) => {
    let exchangeRate;

    const amountElement = document.querySelector(".js-amount");

    const currencyInputElement = document.querySelector(".js-currency-input");

    switch (currencyInputElement.value) {
      case "PLN":
        switch (currencyOutput) {
          case "PLN":
            exchangeRate = 1;

            return +amountElement.value * exchangeRate;

          case "USD":
            exchangeRate = 0.25;

            return +amountElement.value * exchangeRate;

          case "EUR":
            exchangeRate = 0.22;

            return +amountElement.value * exchangeRate;
        }

      case "USD":
        switch (currencyOutput) {
          case "PLN":
            exchangeRate = 4.01;

            return +amountElement.value * exchangeRate;

          case "USD":
            exchangeRate = 1;

            return +amountElement.value * exchangeRate;

          case "EUR":
            exchangeRate = 0.9;

            return +amountElement.value * exchangeRate;
        }

      case "EUR":
        switch (currencyOutput) {
          case "PLN":
            exchangeRate = 4.45;

            return +amountElement.value * exchangeRate;

          case "USD":
            exchangeRate = 1.11;

            return +amountElement.value * exchangeRate;

          case "EUR":
            exchangeRate = 1;

            return +amountElement.value * exchangeRate;
        }
    }
  };

  const onFormInput = () => (result.innerText = "Wynik:");

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult(currencyOutputElement.value);

    showResult(currencyOutputElement.value);
  };

  const init = () => {
    const form = document.querySelector(".js-form");

    form.addEventListener("input", onFormInput);

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
