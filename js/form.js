import { ROUND_GEO_NUMBER } from './data.js';

const adForm = document.querySelector('.ad-form');
const typeOfHouseForm = adForm.querySelector('#type');
const priceForm = adForm.querySelector('#price');
const titleOffer = adForm.querySelector('#title');
const timeInForm = adForm.querySelector('#timein');
const timeOutForm = adForm.querySelector('#timeout');
const addressForm = adForm.querySelector('#address');
const mapFilters = document.querySelector('.map__filters');
const roomNumber = document.querySelector('#room_number');
const selectGuests = document.querySelector('#capacity');
const numberGuests = selectGuests.children;

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

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
  })

  mapFilters.querySelectorAll('.map__features').forEach((feature) => {
    feature.classList.add('disabled');
  })

  // eslint-disable-next-line no-console
  console.log('форма неактивна');
}

const activateMapForm = (startingAddress) => {
  return () => {
    adForm.classList.remove('ad-form--disabled');

    adForm.querySelectorAll('fieldset').forEach((fieldset) => {
      fieldset.classList.remove('disabled');
      fieldset.removeAttribute('disabled', 'disabled');
    });

    mapFilters.classList.remove('map__filters--disabled');
    mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
      filter.classList.remove('disabled');
    });
    mapFilters.querySelectorAll('.map__features').forEach((feature) => {
      feature.classList.remove('disabled');
    });
    addressForm.setAttribute('readonly', 'readonly');
    fillAddress(startingAddress);

    // eslint-disable-next-line no-console
    console.log('форма стала активной');
  }
}

const fillAddress = ({lat, long}) => {
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
  for (let element of numberGuests) {
    if (!(parseInt(element.value)===1)){
      element.toggleAttribute('disabled', true);
    }
  }
}

resetFieldGuest();

roomNumber.addEventListener('change', () => {
  resetFieldGuest();
  numberGuests[2].toggleAttribute('disabled', true);

  switch(parseInt(roomNumber.value)){
    case ROOMS_VALUE.roomThree:
      numberGuests[0].toggleAttribute('disabled', false);
    // eslint-disable-next-line no-fallthrough
    case ROOMS_VALUE.roomTwo:
      numberGuests[1].toggleAttribute('disabled', false);
      // eslint-disable-next-line no-fallthrough
    case ROOMS_VALUE.roomOne:
      numberGuests[2].toggleAttribute('disabled', false);
      selectGuests.value = numberGuests[2].value;
      break;

    case ROOMS_VALUE.roomHundred:
      numberGuests[3].toggleAttribute('disabled', false);
      selectGuests.value = numberGuests[3].value;
      break;
  }
});


export {
  disableMapForm,
  activateMapForm,
  fillAddress
};
