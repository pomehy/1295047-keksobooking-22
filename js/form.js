import { ROUND_GEO_NUMBER } from './data.js';

const adForm = document.querySelector('.ad-form');
const typeOfHouseForm = adForm.querySelector('#type');
const priceForm = adForm.querySelector('#price');
const timeInForm = adForm.querySelector('#timein');
const timeOutForm = adForm.querySelector('#timeout');
const addressForm = adForm.querySelector('#address');
const mapFilters = document.querySelector('.map__filters');

const TYPE_MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const DEFAULT_PRICE = 1000;

priceForm.placeholder = DEFAULT_PRICE;
priceForm.setAttribute('min', priceForm.placeholder)

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

export {
  disableMapForm,
  activateMapForm,
  fillAddress
};
