{
  // Функция, возвращающая случайное положительное, целое число из переданного диапазона включительно. (включая ноль)

  const getRandomNumber = (minNumber, maxNumber) => {
    if (minNumber < maxNumber) {
      let randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
      return Math.floor(randomNumber);
    } else {
      alert('Ошибка ! Укажите корректные числа диапазона');
    }
  }

  alert(getRandomNumber(0, 7));

  // для решения задачи использовал информацию с сайта https://learn.javascript.ru/number
}

{
  // Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

  const generateGeoСoordinates = (minNumber, maxNumber, roundNumber) => {
    if (minNumber < maxNumber && minNumber >= 0) {
      let randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
      return parseFloat((randomNumber.toFixed(roundNumber)), 10);
    } else {
      alert('Ошибка ! Укажите корректные числа диапазона');
    }
  }

  alert(generateGeoСoordinates(1, 3, 4));
}
