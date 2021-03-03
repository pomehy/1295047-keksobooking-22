'use strict';

const OBJECT_COUNT = 10;

const MIN_PRICE = 1;
const MAX_PRICE = 20000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 5;

const minNumberAvatar = 1;
const maxNumberAvatar = 8;

const MIN_GUESTS  = 0;
const MAX_GUESTS  = 7;

const MIN_GEO_X = 35.65000;
const MAX_GEO_X = 35.70000;

const MIN_GEO_Y = 139.70000;
const MAX_GEO_Y = 139.80000;


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

const TIMES_CHECKIN_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_OF_HOUSE = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'В заросшем парке стоит старинный дом',
  'Тепло родоного дома',
];

const PHOTOS_OF_HOUSE = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

// Функция, возвращающая случайное положительное, целое число из переданного диапазона включительно. (включая ноль)

const getRandomInteger = (minNumber, maxNumber) => {
  if (minNumber < maxNumber) {
    const randomInteger = minNumber + Math.random() * (maxNumber + 1 - minNumber);
    return Math.floor(randomInteger);
  } else {
    return maxNumber;
  }
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomFloat = (minNumber, maxNumber, roundNumber) => {
  if (minNumber < maxNumber && minNumber >= 0) {
    const randomFloat = minNumber + Math.random() * (maxNumber + 1 - minNumber);
    return parseFloat((randomFloat.toFixed(roundNumber)), 10);
  } else {
    return maxNumber;
  }
}

// получения аватара пользователя

const generateAvatarAuthor = () => {
  return {
    avatar: 'img/avatars/user0' + getRandomInteger(minNumberAvatar, maxNumberAvatar) + '.png',
  };
}

// поиск случайного элемента в переданном массиве

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

// массив случайной длинны

const getRandomArray = (array) => {
  const randomLength = getRandomInteger(0, array.length - 1);
  const arrayElements = [];

  for(let i = 0; i <= randomLength; i++) {
    arrayElements.push(array[i]);
  }

  return arrayElements;
};

// получение координат

const roundNumberGeo = 5; // знаков после запятой

const getCoordinates = () => {
  return {
    x: getRandomFloat(MIN_GEO_X, MAX_GEO_X, roundNumberGeo),
    y: getRandomFloat(MIN_GEO_Y, MAX_GEO_Y, roundNumberGeo),
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
    checkin: getRandomArrayElement(TIMES_CHECKIN_CHECKOUT),
    checkout: getRandomArrayElement(TIMES_CHECKIN_CHECKOUT),
    features: getRandomArray(FEATURES_OF_HOUSE),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getRandomArray(PHOTOS_OF_HOUSE),
  };
};

// генерация полноценного объявления

const getOffers = () => {
  const newLocation = getCoordinates();
  return {
    author: generateAvatarAuthor(),
    location: newLocation,
    offrer: createOffer(newLocation),
  };
};

// генерация 10 случайных объявлений (предложений)

const generateObjects = new Array(OBJECT_COUNT).fill(null).map(() => getOffers());

// eslint-disable-next-line no-console
console.log(generateObjects);
