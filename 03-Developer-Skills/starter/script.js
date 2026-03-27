///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// Takes an array and logs as a string on the console
// How to transform array into a string?
// How do I consider index 0 as day 1 and 1 as day 2 and so on?
//

// 2) Breaking up into sub-problems
// To transform the array into a string I can use template literals to log variables
// The variables can contain the index position of the array.
// To count the days I can use a for loop with i being the days or index
//

const testData1 = [12, 5, -5, 0, 4];
let str = '';
const forecast = array => {
  for (let i = 0; i < array.length; i++) {
    str += `${array[i]}ºC as day ${i + 1}\n`;
  }
  return str;
};

console.log(forecast(testData1));

function highAndLow(numbers) {
  const arr = numbers.split(' ').map(Number);
  const lowest = Math.min(...arr);
  const highest = Math.max(...arr);
  return `${highest} ${lowest}`;
}

console.log(highAndLow('1 2 -3 4 5'));
