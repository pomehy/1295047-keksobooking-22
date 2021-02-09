{
  // Функция, возвращающая случайное положительное, целое число из переданного диапазона включительно. (включая ноль)

  const getRandomNumber = function (minNumber, maxNumber) {
    if (minNumber < maxNumber) {
      let randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
      return Math.floor(randomNumber);
    } else {
      console.log('Ошбика ! Укажите корректные числа диапазона');
    }
  }

  console.log(getRandomNumber(0, 7));

  // для решения задачи использовал информацию с сайта https://learn.javascript.ru/number
}

{
  // Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

  const generateGeoСoordinates = function (minNumber, maxNumber, roundNumber) {
    if (minNumber < maxNumber && minNumber >= 0) {
      let randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
      return parseFloat((randomNumber.toFixed(roundNumber)), 10);
    } else {
      console.log('Ошбика ! Укажите корректные числа диапазона');
    }
  }

  console.log(generateGeoСoordinates(0, 5, 4));
}
