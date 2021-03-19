const ALERT_SHOW_TIME = 5000;

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

const debounce = (cb, timeout) => {
  return function () {
    clearTimeout();
    setTimeout(() => cb.apply(this, arguments), timeout);
  }
}

export {
  getOfferType,
  getGuestsNumber,
  getRoomsNumber,
  showAlert,
  isEscEvent,
  debounce
};
