{
  // Функция, возвращающая случайное положительное, целое число из переданного диапазона включительно. (включая ноль)

  const getRandomInteger = (minNumber, maxNumber) => {
    if (minNumber < maxNumber) {
      const randomInteger = minNumber + Math.random() * (maxNumber + 1 - minNumber);
      return Math.floor(randomInteger);
    } else {
      alert('Ошибка ! Укажите корректные числа диапазона');
    }
  }

  alert(getRandomInteger(3, 5));
}

{
  // Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

  const getRandomFloat = (minNumber, maxNumber, roundNumber) => {
    if (minNumber < maxNumber && minNumber >= 0) {
      const randomFloat = minNumber + Math.random() * (maxNumber + 1 - minNumber);
      return parseFloat((randomFloat.toFixed(roundNumber)), 10);
    } else {
      alert('Ошибка ! Укажите корректные числа диапазона');
    }
  }

  alert(getRandomFloat(3, 7, 3));
}

const AVATAR_OF_AUTHOR = {
  url: 'img/avatars/users',
  imageFormat: '.png',
};

const TITLE_OF_OFFER = 'Проклятый старый дом';
const TYPE_OF_HOUSE = ['palace', 'flat', 'house', 'bungalow'];
const TIME_CHECKIN_CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES_OF_HOUSE = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = 'Самое страшное и тёмное место в городе';
const PHOTOS_OF_HOUSE = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];


/*
Структура каждого объекта должна быть следующей:
author, объект — описывает автора. Содержит одно поле:
avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это случайное число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д.
offer, объект — содержит информацию об объявлении. Состоит из полей:
title, строка — заголовок предложения. Придумайте самостоятельно.
address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
price, число — стоимость. Случайное целое положительное число.
type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.
rooms, число — количество комнат. Случайное целое положительное число.
guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
description, строка — описание помещения. Придумайте самостоятельно.
photos, массив строк — массив случайной длины из значений: http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg.
location, объект — местоположение в виде географических координат. Состоит из двух полей:
x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
*/
