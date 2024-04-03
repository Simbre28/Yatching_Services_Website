const checkElement = document.getElementById("check");
const visaBtnElement = document.getElementById("visaBtn");
const mastercardBtnElement = document.getElementById("mastercardBtn");
const paypalBtnElement = document.getElementById("paypalBtn");
const submitButtonElement = document.getElementById("submit");
const subResultElement = document.getElementById("subResult");
const paymentMethodElement = document.getElementById("paymentMethod");

submitButtonElement.onclick = function () {
  if (checkElement.checked) {
    subResultElement.textContent = `You are Subscriber`;
  } else {
    subResultElement.textContent = `You are NOT Subscriber`;
  }
  if (visaBtn.checked) {
    paymentMethodElement.textContent = "you are paying with VISA";
  } else if (mastercardBtn.checked) {
    paymentMethodElement.textContent = "you are paying with MASTERCARD";
  } else if (paypalBtn.checked) {
    paymentMethodElement.textContent = "you are paying with PAYPAL";
  } else {
    paymentMethodElement.textContent = "YOU MUST ENTER PAYMENT METHOD";
  }
};
