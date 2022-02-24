"use strict";

/*

Calculating Percentages

    - I am a huge sports fan and I often am wanting to know the percentages of a particular statistic.

*/

const calcPercentage = function(make, attempt) {
    const percentage = make / attempt * 100;
    return percentage;
};

console.log(calcPercentage(6, 10));