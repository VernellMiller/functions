"use strict";

/*

---> Calculating Percentages


    - I am a huge sports fan and I often am wanting to know the percentages of a particular statistic.

*/

const calcPercentage = function (make, attempt) {
  const percentage = (make / attempt) * 100;
  console.log(`percentage: ${percentage}`);
};

calcPercentage(6, 10);

// -----------------------------------------------------------------------

// ---> Find the LOWEST nad HIGHEST values of an array.

const minMax = function (arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const curValue = arr[i];
    if (curValue < min) min = curValue;
    if (curValue > max) max = curValue;
  }
  console.log(`min: ${min} max: ${max}`);
};

minMax([19, 8, 33, 4, 261]);

const highScores = [
  35, 44, 46, 48, 32, 42, 33, 47, 40, 43, 49, 41, 39, 51, 50, 50, 50, 41, 44,
  56, 49,
];

minMax(highScores);

// -----------------------------------------------------------------------
