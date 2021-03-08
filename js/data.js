import {
  getRandomInteger,
  getRandomFloat,
  getRandomArrayElement,
  getRandomArray
} from './util.js';

const OBJECT_COUNT = 10;

const MIN_PRICE = 1;
const MAX_PRICE = 1000000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 5;

const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 8;

const MIN_GUESTS  = 0;
const MAX_GUESTS  = 7;

const MIN_GEO_X = 35.65000;
const MAX_GEO_X = 35.70000;

const MIN_GEO_Y = 139.70000;
const MAX_GEO_Y = 139.80000;

const ROUND_GEO_NUMBER = 5;

const TITLES_OF_OFFERING = [
  'Проклятый старый дом',
  'Место где свет',
];

const TYPES_OF_HOUSE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'В заросшем парке стоит старинный дом',
  'Тепло родного дома',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

// получения аватара пользователя

const generateAvatarAuthor = () => {
  return {
    avatar: 'img/avatars/user0' + getRandomInteger(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR) + '.png',
  };
}


// получение координат

const getCoordinates = () => {
  return {
    x: getRandomFloat(MIN_GEO_X, MAX_GEO_X, ROUND_GEO_NUMBER),
    y: getRandomFloat(MIN_GEO_Y, MAX_GEO_Y, ROUND_GEO_NUMBER),
  };
};

// информация о жилье

const createOffer = (coordinates) => {
  return {
    title: getRandomArrayElement(TITLES_OF_OFFERING),
    address: coordinates.x + ', ' + coordinates.y,
    price: getRandomInteger(MIN_PRICE,MAX_PRICE),
    type: getRandomArrayElement(TYPES_OF_HOUSE),
    rooms: getRandomInteger(MIN_ROOMS,MAX_ROOMS),
    guests: getRandomInteger(MIN_GUESTS,MAX_GUESTS),
    checkin: getRandomArrayElement(TIMES),
    checkout: getRandomArrayElement(TIMES),
    features: getRandomArray(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getRandomArray(PHOTOS),
  };
};

// генерация полноценного объявления
const newLocation = getCoordinates();

const getOffers = () => {
  return {
    author: generateAvatarAuthor(),
    location: newLocation,
    offer: createOffer(newLocation),
  };
};

// генерация 10 случайных объявлений (предложений)

const generateObjects = new Array(OBJECT_COUNT).fill(null).map(() => getOffers());

export { generateObjects };
