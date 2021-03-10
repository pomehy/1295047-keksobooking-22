import {
  getOfferType,
  getGuestsNumber,
  getRoomsNumber
} from './util.js'

const IMG_WIDTH = 45;
const IMG_HEIGHT = 40;
const IMG_ALT = 'Фотография жилья';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

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

const createAndCompleteFragment = (array, render) => {
  const fragment = document.createDocumentFragment();
  array.forEach((item) => {
    fragment.appendChild(render(item));
  });
  return fragment;
}

const createCardElement = ({offer, author}) => {
  const cardElement = cardTemplate.cloneNode(true);
  const featuresItem = cardElement.querySelector('.popup__features');
  const photosContainer = cardElement.querySelector('.popup__photos');

  if (offer.title) {
    cardElement.querySelector('.popup__title').textContent = offer.title;
  }

  if (offer.address) {
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
  }

  if (offer.type) {
    cardElement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  }

  if (offer.type) {
    cardElement.querySelector('.popup__type').textContent = getOfferType(offer.type);
  }

  if (offer.rooms || offer.guests) {
    cardElement.querySelector('.popup__text--capacity').textContent = getRoomsNumber(offer.rooms) + ' для ' + getGuestsNumber(offer.guests);
  }

  if (offer.checkin || offer.checkout) {
    cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;
  }

  featuresItem.innerHTML = '';
  featuresItem.appendChild(createAndCompleteFragment(offer.features, createFeatureItem));

  if (offer.description) {
    cardElement.querySelector('.popup__description').textContent = offer.description;
  }

  photosContainer.innerHTML = '';
  photosContainer.appendChild(createAndCompleteFragment(offer.photos, createPhotoElement));

  if (author.avatar) {
    cardElement.querySelector('.popup__avatar').src = author.avatar;
  }

  return cardElement;
};

export { createCardElement };
