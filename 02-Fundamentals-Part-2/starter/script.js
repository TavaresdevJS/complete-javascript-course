'use strict';

function describeCountry (country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descFinland = console.log(describeCountry('Finland', 6, 'Helsinki'));
const descPortugal = console.log(describeCountry('Portugal',10.75, 'Lisboa'));
const descBrazil = console.log(describeCountry('Brazil', 213, 'Brasilia'));

function percentageOfWorld1(population){
   return (population / 7900) * 100;
} 

const perceFindland1 = percentageOfWorld1(6);
const percPortugal1 = percentageOfWorld1(10);
const percBrazil = percentageOfWorld1(213);

console.log(perceFindland1, percPortugal1, percBrazil);

const percentageOfWorld2 = population => (population / 7900) * 100;

console.log(percentageOfWorld2(11));

const describePopulation = (country, population)=>{
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} millon people, which is about ${percentage}% of the world`;
    console.log(description);
}

describePopulation('Finland', 6);
describePopulation('Portugal', 10);
describePopulation('Brazil', 213);

const populations = [11, 6, 213, 314];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
];

console.log(percentages);

const neighbours = ['Argentina', 'Uruguay', 'Paraguay'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
 
if (!neighbours.includes('Germany')){
    console.log('Probably not a central european country :D');
}

neighbours[neighbours.indexOf('Argentina')] = 'Bolivia';
console.log(neighbours);


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)


const myCountry = {
    country: 'Brazil',
    capital: 'Brasilia',
    language: 'portuguese',
    population: 214,
    neighbours: ['Argentina', 'Paraguai', 'Uruguai'],
    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} Is island: ${this.isIsland}.`;
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

myCountry.checkIsland();
console.log(myCountry.describe());
console.log(myCountry);

//console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

/*myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);*/

/*for (let i = 0; i <= 50; i++){
    console.log(`Voter number ${i} is currently voting`);
}*/
const percentages2 = [];

for (let i = 0; i < populations.length; i++){
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
    
}

console.log(percentages2);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++){
    for(let y = 0; y <listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
}

const percentage3 = [];
let i = 0;
while (i < populations.length){
    const perc = percentageOfWorld1(populations[i]);
    percentage3.push(perc);
    i++;
}

console.log(percentage3);