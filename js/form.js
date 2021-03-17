import { ROUND_GEO_NUMBER } from './data.js';
import { sendData } from './api.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_PER_NIGHT = 1000000;

const POST_URL = 'https://22.javascript.pages.academy/keksobooking';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const addressForm = adForm.querySelector('#address');
const typeOfHouseForm = adForm.querySelector('#type');
const titleOffer = adForm.querySelector('#title');
const priceForm = adForm.querySelector('#price');
const timeInForm = adForm.querySelector('#timein');
const timeOutForm = adForm.querySelector('#timeout');
const roomNumber = adForm.querySelector('#room_number');
const adFormResetButton = adForm.querySelector('.ad-form__reset');
const selectGuests = adForm.querySelector('#capacity');
const guestsNumber = selectGuests.children;

const TYPE_MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const ROOMS_VALUE = {
  roomOne: 1,
  roomTwo: 2,
  roomThree: 3,
  roomHundred: 100,
};

const DEFAULT_PRICE = 1000;

priceForm.placeholder = DEFAULT_PRICE;
priceForm.setAttribute('min', priceForm.placeholder)

titleOffer.addEventListener('input', () => {
  const valueLength = titleOffer.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleOffer.setCustomValidity('Минимум 30 символов. Добавьте ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleOffer.setCustomValidity('Максимум 100 символов. Удалите ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  } else {
    titleOffer.setCustomValidity('');
  }

  titleOffer.reportValidity();
});

const disableMapForm = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.classList.add('disabled');
    fieldset.setAttribute('disabled', 'disabled');
  });

  mapFilters.classList.add('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.classList.add('disabled');
    filter.setAttribute('disabled', 'disabled');
  })

  mapFilters.querySelectorAll('.map__features').forEach((feature) => {
    feature.classList.add('disabled');
    feature.setAttribute('disabled', 'disabled');
  });
};

const activateMapForm = () => {
  adForm.classList.remove('ad-form--disabled');

  adForm.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.classList.remove('disabled');
    fieldset.removeAttribute('disabled', 'disabled');
  });

  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.classList.remove('disabled');
    filter.removeAttribute('disabled', 'disabled');
  });
  mapFilters.querySelectorAll('.map__features').forEach((feature) => {
    feature.classList.remove('disabled');
    feature.removeAttribute('disabled', 'disabled');
  });
  addressForm.setAttribute('readonly', 'readonly');
};

const fillAddress = (lat, long) => {
  const latitude = lat.toFixed(ROUND_GEO_NUMBER);
  const longitude = long.toFixed(ROUND_GEO_NUMBER);
  addressForm.value = latitude + ' ' + longitude;
}

typeOfHouseForm.addEventListener('change', (evt) => {
  priceForm.value = priceForm.placeholder = priceForm.min = TYPE_MIN_PRICES[evt.target.value];
});

timeOutForm.addEventListener('change', (evt) => {
  timeInForm.value = evt.target.value;
});

timeInForm.addEventListener('change', (evt) => {
  timeOutForm.value = evt.target.value;
});

const resetFieldGuest = () => {
  for (let element of guestsNumber) {
    if (!(parseInt(element.value)===1)){
      element.toggleAttribute('disabled', true);
    }
  }
};

resetFieldGuest();

roomNumber.addEventListener('change', () => {
  resetFieldGuest();
  guestsNumber[2].toggleAttribute('disabled', true);

  switch(parseInt(roomNumber.value)){
    case ROOMS_VALUE.roomThree:
      guestsNumber[0].toggleAttribute('disabled', false);
    // eslint-disable-next-line no-fallthrough
    case ROOMS_VALUE.roomTwo:
      guestsNumber[1].toggleAttribute('disabled', false);
      // eslint-disable-next-line no-fallthrough
    case ROOMS_VALUE.roomOne:
      guestsNumber[2].toggleAttribute('disabled', false);
      selectGuests.value = guestsNumber[2].value;
      break;

    case ROOMS_VALUE.roomHundred:
      guestsNumber[3].toggleAttribute('disabled', false);
      selectGuests.value = guestsNumber[3].value;
      break;
  }
});

priceForm.addEventListener('input', () => {
  const price = priceForm.value;
  const type = typeOfHouseForm.value;
  const minPrice = TYPE_MIN_PRICES[type];

  if (price < minPrice) {
    priceForm.setCustomValidity('Стоимость должна быть не менее ' + minPrice);
  } else if (price > MAX_PRICE_PER_NIGHT) {
    priceForm.setCustomValidity('Стоимость не должна превышать ' + MAX_PRICE_PER_NIGHT);
  } else {
    priceForm.setCustomValidity('');
  }
  priceForm.reportValidity();
});

const offerFormSubmit = (onSuccess, onError) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      POST_URL,
      onSuccess,
      onError,
      new FormData(evt.target),
    );
  });
};

export {
  disableMapForm,
  activateMapForm,
  fillAddress,
  offerFormSubmit,
  adFormResetButton,
  adForm
};
