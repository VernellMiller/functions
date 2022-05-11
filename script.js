"use strict";

// I am a huge sports fan and I often want to know the percentages of a particular statistic.

// ---> Calculating Percentages

const calcPercentage = function (make, attempt) {
  const percentage = (make / attempt) * 100; // divide the makes by the total number of attempts and multiply it by 100. Then save that as the percentage.

  console.log(`percentage: ${percentage}`); // log the percentage to the console.
};

calcPercentage(6, 10);

// -----------------------------------------------------------------------

// ---> Find the LOWEST nad HIGHEST values of an array.

const minMax = function (arr) {
  let min = arr[0]; // save the first index value in an array as min.
  let max = arr[0]; // save the first index value in an array as max.

  // loop over the length of any array.
  for (let i = 0; i < arr.length; i++) {
    const curValue = arr[i]; // save current array index value in a variable
    if (curValue < min) min = curValue; // if the current value is less than min, value save that current value as the min.

    if (curValue > max) max = curValue; // if the current value is greater than max, save that value as the max.
  }
  console.log(`min: ${min} max: ${max}`); // log the min and the max to the console.
};

minMax([19, 8, 33, 4, 261]);

const highScores = [
  35, 44, 46, 48, 32, 42, 33, 47, 40, 43, 49, 41, 39, 51, 50, 50, 50, 41, 44,
  56, 49,
];

minMax(highScores);

// -----------------------------------------------------------------------

// ---> Return third letter of string

const returnedString = function (string) {
  console.log(string);

  let arr = string.split("").filter((letter, index) => (index + 1) % 3 === 0);
  console.log(arr);
  return arr;
};

returnedString("iamyourlyftdriver");
