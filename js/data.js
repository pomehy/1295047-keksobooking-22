import {
  getRandomInteger,
  getRandomFloat,
  getRandomArrayElement,
  getRandomArray
} from './util.js';

const OBJECT_COUNT = 10;
const MIN_OBJECT_COUNT = 0;

const MIN_PRICE = 1;
const MAX_PRICE = 1000000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 10;

const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 8;

const MIN_GUESTS = 1;
const MAX_GUESTS = 20;

const MIN_GEO_X = 35.65000;
const MAX_GEO_X = 35.70000;
const MIN_GEO_Y = 139.70000;
const MAX_GEO_Y = 139.80000;

const ROUND_GEO_NUMBER = 5;

const TITLES_OF_OFFERING = [
  'Проклятый старый дом',
  'Место где свет',
];

const DESCRIPTIONS = [
  'В заросшем парке стоит старинный дом',
  'Тепло родного дома',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const TYPES_OF_HOUSE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const createOffer = () => {
  const GEO_X = getRandomFloat(MIN_GEO_X, MAX_GEO_X, ROUND_GEO_NUMBER);
  const GEO_Y = getRandomFloat(MIN_GEO_Y, MAX_GEO_Y, ROUND_GEO_NUMBER);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR) + '.png',
    },

    location: {
      x: GEO_X,
      y: GEO_Y,
    },

    offer: {
      title: getRandomArrayElement(TITLES_OF_OFFERING),
      price: getRandomInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES_OF_HOUSE),
      address: GEO_X + ', ' + GEO_Y,
      rooms: getRandomInteger(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomInteger(MIN_GUESTS, MAX_GUESTS),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
  }
};

const createOffers = (count) => {
  return new Array(count).fill(null).map(() => createOffer());
}


export {
  createOffers,
  ROUND_GEO_NUMBER,
  MIN_OBJECT_COUNT,
  OBJECT_COUNT
};
