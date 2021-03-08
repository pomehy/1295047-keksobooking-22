import { generateObjects } from './data.js'

const IMG_WIDTH = 45;
const IMG_HEIGHT = 40;
const IMG_ALT = 'Фотография жилья';

const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content;

const cardFragment = document.createDocumentFragment();

const createFeatureItem = (item) => {
  const featureItem = document.createElement('li');
  featureItem.classList.add('popup__feature');
  featureItem.classList.add('popup__feature--' + item);
  return featureItem;
}

const createPhotoElement = (item) => {
  const photoItem = document.createElement('img');
  photoItem.src = item;
  photoItem.width = IMG_WIDTH;
  photoItem.height = IMG_HEIGHT;
  photoItem.classList.add('popup__photo');
  photoItem.alt = IMG_ALT;
  return photoItem;
}

const getOfferType = (type) => {
  const offers = {
    flat: 'Квартрира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
  }
  return offers[type];
}

const getGuestsNumber = (guests) => {
  if (guests % 10 === 1 && guests !== 11) {
    return guests + ' гостя';
  }
  return guests + ' гостей';
}

const getRoomsNumber = (rooms) => {
  const remnant  = rooms % 10;
  if (rooms >= 5 && rooms <= 20 || rooms === 0) {
    return rooms + ' комнат';
  }
  if (remnant === 1) {
    return rooms + ' комната';
  }
  if (remnant > 1 && remnant < 5) {
    return rooms + ' комнаты';
  }
  return rooms + ' комнат';
}

const createAndCompleteFragment = (array, render) => {
  const fragment = document.createDocumentFragment();
  array.forEach((item) => {
    fragment.appendChild(render(item));
  });
  return fragment;
}

const showPopup = ({offer, author}) => {
  const cardElement = cardTemplate.cloneNode(true);
  const featuresItem = cardElement.querySelector('.popup__features');
  const photosContainer = cardElement.querySelector('.popup__photos');
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  cardElement.querySelector('.popup__type').textContent = getOfferType(offer.type);
  cardElement.querySelector('.popup__text--capacity').textContent = getRoomsNumber(offer.rooms) + ' для ' + getGuestsNumber(offer.guests);
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;

  featuresItem.innerHTML = '';
  featuresItem.appendChild(createAndCompleteFragment(offer.features, createFeatureItem));
  cardElement.querySelector('.popup__description').textContent = offer.description;
  photosContainer.innerHTML = '';
  photosContainer.appendChild(createAndCompleteFragment(offer.photos, createPhotoElement));
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  cardFragment.appendChild(cardElement);
  mapCanvas.appendChild(cardFragment);
};

showPopup(generateObjects[0]);
