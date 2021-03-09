const adForm = document.querySelector('.ad-form');

const TYPE_MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const typeOfHouseForm = adForm.querySelector('#type');
const priceForm = adForm.querySelector('#price');
const timeInForm = adForm.querySelector('#timein');
const timeOutForm = adForm.querySelector('#timeout');
