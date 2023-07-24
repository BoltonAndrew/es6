// let & const
let num1 = 10; // Can change value
const num2 = 5; // Can't change value

// Spread operator
// Array Spread
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["Steve", "Gary", "Phil", "Carly"];
console.log(...arr1);
const arr3 = [...arr1, ...arr2];
console.log(arr3);
const arr4 = [0, ...arr1, 6];
console.log(arr4);

// Object Spread
const obj1 = {
  name: "Andy B",
  age: 35,
  pet: "Link",
};
const obj2 = {
  favColor: "Red",
  kids: 4,
};
console.log(obj1);
const obj3 = {
  ...obj1,
  ...obj2,
};
console.log(obj3);
const obj4 = {
  name: "Carly B",
  age: 32,
};
const obj5 = {
  cars: false,
  ...obj1,
  ...obj4,
  name: "Steve",
};
console.log(obj5);

function myFunc(num1, num2, num3) {
  console.log("parameters are: ", num1, num2, num3);
}

myFunc(1, 2, 3);
const nums = [4, 5, 6];
myFunc(...nums);

// Rest parameter
function concat(...strings) {
  for (let str of strings) {
    console.log(str);
  }
}

// function concatWArr(strings) {
//     for (let str of strings) {
//         console.log(str);
//       }
// }

// let arrNames = ["Steve", "Gary"];

// concatWArr(["Steve", "Gary"]);

concat("Steve", "Gary");
concat("singapore", "malaysia", "indonesia", "thailand", "myanmar");

// Destructuring
// Array Destructuring
const arrValue = [1, 2, 3];
// let a = arrValue[0];
// let b = arrValue[1];
// let c = arrValue[2];

const [a, b, c] = arrValue;
console.log(a);
console.log(b);
console.log(c);

function position(x, y, dir) {
  if (dir === "up") {
    x--;
  }

  return [x, y];
}

const [x, y] = position(12, 15, "up");
console.log(x, y);

// Object Destructuring
const person = {
  name: "Brandon",
  age: 29,
  gender: "Male",
};

// let name = person.name;
// let age = person.age;
// let gender = person.gender;

let { name, age, gender } = person;

console.log(name);
console.log(age);
console.log(gender);

function myFunc2() {
  return { myName: "Steve", friend: "Gary" };
}

let { friend, myName } = myFunc2();

console.log(friend, myName);

// Arrow Functions
function sum(num1, num2) {
  return num1 + num2;
}

const sumArrow = (num1, num2) => {
  return num1 + num2;
};

const minusArrow = (num1, num2) => num1 - num2;
console.log(minusArrow(3, 1));

let result2 = minusArrow(5, 1);
console.log(result2);

const divideArrow = (num1) => num1 / num1;
console.log(divideArrow(12));

// Iterators & Array Methods
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let user = {
  username: "AndyB",
  email: "andyb@email.com",
};
// For In
for (let index in numbers) {
  console.log(index);
}
for (let key in user) {
  console.log(key, ": ", user[key]);
}
// For Of
for (let item of numbers) {
  console.log(item);
}
// forEach
const multiply = (num, index, arr) => {
  console.log("num: ", num);
  console.log("index: ", index);
  console.log("arr: ", arr);
};
numbers.forEach(multiply);

numbers.forEach((val) => {
  console.log(val * val);
});

// Array Methods
const sampleArr1 = [45, 4, 9, 16, 25];
const sampleArr2 = sampleArr1.map((val, i) => {
  return val * 3;
});

console.log(sampleArr2);

const sampleArr3 = sampleArr1.filter((val) => {
  return val < 10;
});

const arrSearch = ["Andy", "Steve", "Gary", "Andy"];

const searchTerm = "Andy";

const results = arrSearch.filter((val, i) => {
  console.log(i);
  //   if (val === searchTerm) {
  //     return true
  //   } else {
  //     return false
  //   }
  return val === searchTerm;
});

console.log(results);
