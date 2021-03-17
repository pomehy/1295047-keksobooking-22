const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (minNumber, maxNumber) => {
  if (minNumber < maxNumber) {
    const randomInteger = minNumber + Math.random() * (maxNumber + 1 - minNumber);
    return Math.floor(randomInteger);
  } else {
    return maxNumber;
  }
};

const getRandomFloat = (minNumber, maxNumber, roundNumber) => {
  if (minNumber < maxNumber && minNumber >= 0) {
    return parseFloat((Math.random() * (minNumber - maxNumber) + maxNumber).toFixed(roundNumber));
  } else {
    return maxNumber;
  }
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getRandomArray = (array) => {
  const randomLength = getRandomInteger(0, array.length - 1);
  const arrayElements = [];

  for(let i = 0; i <= randomLength; i++) {
    arrayElements.push(array[i]);
  }

  return arrayElements;
};

const getOfferType = (type) => {
  const offers = {
    flat: 'Квартрира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
  }
  return offers[type];
};

const getGuestsNumber = (guests) => {
  if (guests % 10 === 1 && guests !== 11) {
    return guests + ' гостя';
  }
  return guests + ' гостей';
};

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
};

const showAlert = (message='Не удалось загрузить данные') => {
  return () => {
    const alertContainer = document.createElement('div');
    alertContainer.setAttribute('style', 'position: fixed; top: 20px; right: 0; width: 100%; text-align: center; background: rgb(255 0 0); padding: 20px; color: white; z-index: 1000;');
    alertContainer.textContent = message;

    document.body.append(alertContainer);

    setTimeout(() => {
      alertContainer.remove();
    }, ALERT_SHOW_TIME);
  }
}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export {
  getRandomInteger,
  getRandomFloat,
  getRandomArrayElement,
  getRandomArray,
  getOfferType,
  getGuestsNumber,
  getRoomsNumber,
  showAlert,
  isEscEvent
};
