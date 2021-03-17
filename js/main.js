import './data.js';
import './cards.js';
import './form.js';
import './map.js';
import './api.js';
import {
  resetMainPinMarker,
  setUpMap,
  STARTING_LATITUDE,
  STARTING_LONGITUDE
} from './map.js';

import { getData } from './api.js';

import {
  OBJECT_COUNT,
  MIN_OBJECT_COUNT
} from './data.js';

import { showAlert } from './util.js';

import {
  adForm,
  adFormResetButton,
  offerFormSubmit,
  disableMapForm,
  fillAddress
} from './form.js';

import {
  showErrorModal,
  showSuccessModal
} from './success-modal.js';

const GET_URL = 'https://22.javascript.pages.academy/keksobooking/data';

const setDefaults = () => {
  adForm.reset();
  resetMainPinMarker();
  fillAddress(STARTING_LATITUDE, STARTING_LONGITUDE);
}

disableMapForm();

getData(GET_URL, (offers) => {
  setUpMap(offers.slice(MIN_OBJECT_COUNT, OBJECT_COUNT));
}, showAlert('Не удалось загрузить объявления'))

offerFormSubmit(() => {
  showSuccessModal();
  setDefaults();
}, showErrorModal);

adFormResetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  setDefaults();
});
