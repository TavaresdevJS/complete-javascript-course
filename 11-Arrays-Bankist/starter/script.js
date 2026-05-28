'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);
displayMovements(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts); // stw

// console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
 */
//

/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, Map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
});

console.log(movementsDescriptions);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);

/* const calcAverageHumanAge = ages => {
  return ages
    .map(dogAge => {
      let humanAge;
      if (dogAge <= 2) humanAge = 2 * dogAge;
      else if (dogAge > 2) humanAge = 16 + dogAge * 4;
      return humanAge;
    })
    .filter(dogAge => dogAge >= 18)
    .reduce((acc, dogAge, i, arr) => acc + dogAge / arr.length, 0);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); */
/* const calcAverageHumanAge = ages => {
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4,
  );
  const adults = humanAges.filter(humanAge => humanAge >= 18);
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0,
  );
  return average;
}; */

const eurToUSD = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

const arr = [[1, 2, 4], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes('fetch') && breed.activities.includes('running'),
).breed;
console.log(dogBothActivities);

const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities)
      .filter(activity => activity !== 'swimming'),
  ),
];
console.log(swimmingAdjacent);

const allBreedsHeavyEnough = breeds.every(breed => breed.averageWeight >= 10);
console.log(allBreedsHeavyEnough);

console.log(breeds.some(breed => breed.activities.length >= 3));

const fetchWeights = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(breed => breed.averageWeight);
const heaviestFetchBreed = Math.max(...fetchWeights);

console.log(fetchWeights);
console.log(heaviestFetchBreed);

// Sorting arrays

// Strings
/* const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners); */

// Numbers
//console.log(movements);
//
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
/* movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
}); */
//movements.sort((a, b) => a - b);
//console.log(movements);

// Descending
/* movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
}); */
//movements.sort((a, b) => a - b);
//console.log(movements);

// Array Grouping

console.log(movements);

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals',
);

console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});
console.log(groupedByActivity);

const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedAccounts);

// More ways to create arrays

const arronSpider = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
console.log(x);

arronSpider.fill(23, 2, 6);
console.log(arronSpider);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')),
  );
  console.log(movementsUI);
});

// Non-Destructive alternatives: toReversed, toSorted, toSpliced

console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);
console.log(movements);

//////////////////////////////////////
// Array Methods Practice

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000);

// 3.
const { deposits1, withdrawals1 } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits1' : 'withdrawals1'] += cur;
      return sums;
    },
    { deposits1: 0, withdrawals1: 0 },
  );

console.log(deposits1, withdrawals1);

// 4.
// this is a nice title -> This Is a Nice title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

const doggos = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

doggos.forEach(function (dogs) {
  dogs.recFood = Math.floor(dogs.weight ** 0.75 * 28);
});

console.log(doggos);

const dogSarah = doggos.find(dog => dog.owners.includes('Sarah'));
dogSarah.curFood > dogSarah.recFood
  ? console.log("Sarah's dog eats too much")
  : console.log("Sarah's dog eats too little");

const ownersEatTooMuch = doggos
  .filter(dogs => dogs.curFood > dogs.recFood)
  .flatMap(dogs => dogs.owners);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

const ownersEatTooLittle = doggos
  .filter(dogs => dogs.curFood < dogs.recFood)
  .flatMap(dogs => dogs.owners);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(doggos.some(dogs => dogs.curFood === dogs.recFood));

const checkEatingOkay = dogs =>
  dogs.curFood < dogs.recFood * 1.1 && dogs.curFood > dogs.recFood * 0.9;

console.log(doggos.some(checkEatingOkay));

const dogsEatingOkay = doggos.filter(checkEatingOkay);
console.log(dogsEatingOkay);

const dogsGroupedByPortion = Object.groupBy(doggos, dog => {
  if (dog.curFood > dog.recFood) {
    return 'too-much';
  } else if (dog.curFood < dog.recFood) {
    return 'too-little';
  } else {
    return 'exact';
  }
});
console.log(dogsGroupedByPortion);

const dogsGroupedByOwners = Object.groupBy(
  dogs,
  dog => `${dog.owners.length}-owners`,
);
console.log(dogsGroupedByOwners);

const dogSorted = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log(dogSorted);
