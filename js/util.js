
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

export {
  getRandomInteger,
  getRandomFloat,
  getRandomArrayElement,
  getRandomArray
};
