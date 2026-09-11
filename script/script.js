function breakline() {
  console.log("-----------------------------");
}
let arr = [23, 21, 161, 42, 151, 612, 15, 62, 52];

arr.forEach((index, element) => {
  console.log(`${element} - ${index}`);
});
breakline();

const arr2 = arr.map((element) => {
  return element / 10;
});

arr2.forEach((element) => {
  console.log(element);
});
breakline();

const newArray = arr.filter((element) => {
  return element % 2 != 0;
});

newArray.forEach((element) => {
  console.log(element);
});

breakline();

const total = arr.reduce((sum, element) => {
  sum += element;
  return sum;
}, 0);

console.log(total);
breakline();

let result = arr.some((element) => {
  return element % 2 !== 0;
});

console.log(`Is any element in arr is odd ?: ${result}`);
breakline();

result = arr.every((element) => {
  return element % 2 !== 0;
});

console.log(`Is any element in arr is odd ?: ${result}`);
breakline();

let firstEvenNumber = arr.find((element) => {
  return element % 2 === 0;
});

console.log(`First even element in arr: ${firstEvenNumber}`);
breakline();

let lastEvenNumber = arr.findLast((element) => {
  return element % 2 === 0;
});

console.log(`Last even element in arr: ${lastEvenNumber}`);
breakline();

firstEvenNumber = arr.findIndex((index) => {
  return index % 2 === 0;
});

console.log(`First even element's index in arr: ${firstEvenNumber}`);
breakline();

lastEvenNumber = arr.findLastIndex((index) => {
  return index % 2 === 0;
});

console.log(`Last even element's index in arr: ${lastEvenNumber}`);
breakline();

let obj = {
  name: "Mohammad",
  age: 24,
};

console.log(obj);
breakline();
const { name } = obj;

console.log(`Name is: ${name}`);
breakline();

const { age } = obj;

console.log(`Age is: ${age}`);
breakline();

console.log("Inside printDetails function");

obj = {
  name: "Mohammad",
  age: 24,
};

const printDetails = ({ name }) => {
  console.log(`Name is: ${name}`);
  console.log(`Age is: ${age}`);
};
printDetails(obj);
breakline();

console.log("--Before--");

let number_1 = 15;
let number_2 = 35;

console.log(`Number 1 is: ${number_1}`);
console.log(`Number 2 is: ${number_2}`);

[number_1, number_2] = [number_2, number_1];

console.log("--After--");

console.log(`Number 1 is: ${number_1}`);

console.log(`Number 2 is: ${number_2}`);
