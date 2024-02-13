// Случайное число

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Проверка строки

const stringCount = (str, maxLength) => {
  return str.length <= maxLength;
};

// Случайный элемент массива

const getRandomArrayItem = (items) => {
  return items[getRandomInt(0, items.length - 1)];
};

// Получить не повторяющиеся элементы массива

// const makeUniqueRandomIntegerGenerator = (min, max) => {
//   const previousValues = [];

//   return () => {
//     let currentValue = getRandomInt(min, max);
//     if (previousValues.length >= (max - min + 1)) {
//       throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
//     }
//     while (previousValues.includes(currentValue)) {
//       currentValue = getRandomInt(min, max);
//     }

//     previousValues.push(currentValue);

//     return currentValue;
//   };
// };




export {getRandomArrayItem, getRandomInt, stringCount};
