let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);

const country = "Brazil";
const continent = "South America";
let population = 213;

const isIsland = false;
let language = "portuguese";


console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

let halfPopulation = population / 2;
population++;
console.log(population);
console.log(population > 6);
console.log(population > 33);
const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description1);

if(population > 33){
    console.log(`${country}'s population is above avarage.`);
} else{
    console.log(`${country}'s population is ${33 - population} million below avarage.`);
}

if(language === "english" && population < 50 && !isIsland){
    console.log("You should live in Brazil! :)");
} else{
    console.log("Brazil does not meet your criteria :(");
}


/*
const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));
if (numNeighbours === 1){
    console.log("Only 1 border!");
} else if(numNeighbours > 1){
    console.log("More than 1 border");
} else{
    console.log("No borders");
}
    */

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}