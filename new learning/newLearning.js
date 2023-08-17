// const massMark = 78;
// const heightMark = 1.69;
// const massJhon = 92;
// const heightJhon = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJhon = massJhon / (heightJhon * heightJhon);
// const higherBmi = BMIMark > BMIJhon;
// console.log(BMIMark, BMIJhon);

// if (BMIMark > BMIJhon) {
//     console.log("Mark's BMI is higher than John's!")
// }
// else {
//     console.log("John's BMI is higher than Mark's!");
// }

// let v1 = 10
// let v2 = 20;
// console.log("res:", v1 > v2);

// const firstName = 'Meshwa';
// const job = 'Software Developer';
// const birthYear = 2000;
// const currentYear = 2023;
// const meshwa = `I am  ${firstName} , a  ${(currentYear - birthYear )} years old ${job}`;

// console.log(meshwa);

// const name = "Meshva"
// const bornYear = 2000;
// const res = ' "I" am M'

// console.log(res);

// const age = 23;
// console.log(Number(age), age);

// let height=10;
// if(height){
//     console.log("YAY! Height is defined");
// }
// else{
//     console.log("Height is UNDEFINED")
// }

// const favourite = Number(prompt("What is your roll no?"));
// console.log(favourite);
// if (favourite === 23) {
//     console.log("Cool ! 23 is a cool roll-no!");
// } else if (favourite === 7) {
//     console.log("Cool ! 7 is a cool roll-no!");
// } else if (favourite === 9) {
//     console.log("Cool ! 9 is a cool roll-no!");
// } else {
//     console.log("Roll-no is not 23 or 9 or 7");
// }

// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphines win the trophy🏆");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koalas win the trophy🏆");
// } else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log("Both are win the trophy🏆");
// }
// else{
//     console.log("No one wins the trophy😢");
// }

// let age = 27;
// const drink = age >= 18 ? "Wine 🍷" : "Water 💧";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "Wine 🍷" : "Water 💧"}`);

// let bill = 40;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
//    ${bill + tip}`);

// const calcAge = birthYear => 2023 - birthYear;
// const age = calcAge(1990);
// console.log(age);

// const yearsUntillRetirement = (birthYear, firstName) => {
//     const age2 = 2023 - birthYear;
//     const retirement = 65 - age2;
//     return`${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntillRetirement(2000,"Meshwa"));
// console.log(yearsUntillRetirement(1998,"Malak"));

// function cutFruitPieces(fruit) {
//     return fruit;
// }
// function fruitProcessor(apple, orange) {
//     const applePieces = cutFruitPieces(apple);
//     const orangePieces = cutFruitPieces(orange);
//     const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(8, 6));

// function signUp(name, emailId, password) {
//     if (name && emailId && password) return "You can fill this form";

//     return "You can't fill this form";
// }
// console.log(signUp("Meshwa", 123));

// const v1 = null;
// const v2 = undefined;
// const v3 = "";

// console.log("v1",Boolean(v1));
// console.log("v2",Boolean(v2));

// function signUp(name, emailId, password) {
//     if (!name) return "Name is required";
//     else if (!emailId) return "Email-id is required";
//     else if (!password) return "Password is required";

//     return "You can fill this form";
// }
// console.log(signUp("meshwa12@gmail.com","12345"));

// const friends = ["Ridhhi", "Prerna,", "Kavya", "Ruchi", "Gifty"];
// console.log(friends);
// console.log(friends[2]);
// console.log(friends[friends.length - 1]);
// friends[4] = "neha";
// console.log(friends);

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);
// const total = [(bills[0] + tips[0]),(bills[1] + tips[1]),(bills[2] + tips[2])]
// console.log(total);

// const meshwa = {
//     firstName: "Meshwa",
//     lastName: "Patel",
//     birhYear: 2000,
//     job: "Software Developer",
//     friends: ["Ridhhi", "Prerna,", "Kavya", "Ruchi", "Gifty"],
//     hasDriverLicense: true,
// }
//     calcAge: function () {
//         this.age = 2023 - this.birhYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and she has ${this.hasDriverLicense ? "a" : "no"} driver's licence.`;
//     }
// };
// console.log(meshwa.getSummary());

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: "Jhon Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();
// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than  ${john.fullName}'s BMI(${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI(${john.bmi}) is higher than  ${mark.fullName}'s BMI(${mark.bmi()}`)
// };

// const meshwa = ["Meshwa Patel", 23, "Jr. software developer", ["Ridhhi", "Prerna,", "Kavya", "Ruchi", "Gifty"], "Engaged", true];
// const parth = ["Parth", 25, "Mechanical Designer", "engaged"];

// parth.reverse();
// console.log(parth);
// const meshwa = [24, 100, 345];
// meshwa.sort(function (a, b) { return b-a});
// function myFunction(arr) {
// meshwa.sort(function () { return 0.5 - Math.random() });
// return Math.max.apply(null, arr);
// return Math.min.apply(null, arr);
// console.log(meshwa);
// }
// console.log(myFunction(meshwa));

// console.log(parth);
// console.log(meshwa);
// const join = meshwa.concat(parth);
// console.log(join);

// console.log(meshwa.join("*"));
// meshwa.splice(2,2, "Parth", "Malak");
// console.log(meshwa);

// const slice = meshwa.slice(5);
// console.log(meshwa);
// console.log(slice);

// for (let i = meshwa.length - 1; i >= 0; i--) {
//     console.log(i, meshwa[i]);
// }

// for (let i = 0; i < meshwa.length; i++) {
//     if (typeof meshwa[i] !== "string") continue;
//     console.log(meshwa[i], typeof meshwa[i]);
// }
// for (let i = 0; i < meshwa.length; i++) {
//     if (typeof meshwa[i] === "number") break;
//     console.log(meshwa[i], typeof meshwa[i]);
// }

// const years = [1990, 1970, 1942, 1956, 2006];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }

// console.log(ages)

// Loop in loop

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-----------Starting exercise ${exercise}`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`lifting weight repetition ${rep}🏋🏻‍♀️`);
//     }
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`lifting weight repetition ${rep}🏋🏻‍♀️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice != 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log("LOOP is about to end.......")
//     }
// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);

// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage(tips));
// console.log(calcAverage(totals));

// -----------------------FOR EACH METHOD---------------------//

// const nums = [23, 78, 90, 4, 0];

// const elm = nums.filter(n => n < 50);
// console.log(elm);

// const map = nums.map(n => {
//     n = n < 50;
//     return n;
// });
// console.log(map);

// function myMap(n) {
//     return n < 50;
// }
// console.log(nums.filter(myMap));
// console.log (nums.filter((n) => {}));

// const res = nums.map((el) => {
//     el = el + 2
//     return el
// })

// console.log("res", res);
// // nums.filter(n => n % 2 === 0)
// //     .map(n => n * 2)
// //     .forEach((n) => {
// //         console.log(n);
// //     });
// console.log(nums.filter(myMap));

// function myMap(n) {
//      return n >50;
// }

// const nums = [5, 8, 56, 96, 2, 45, 75, 63];
// const position = nums.indexOf(45) + 3;
// console.log("Number 5 position is", position);

// const checkAllGraterThanThirty = x => x > 30;

// if (nums.some(checkAllGraterThanThirty)) {
//     console.log("ALL are grater than 30");
// } else {
//     console.log("Atleast 1 element is grater than 30");
// }

// let text = 'I love cats. Cats are very easy to love. Cats are very popular';
// text = text.replaceAll(/Cats/g, "Dogs");
// text = text.replaceAll(/cats/g, "dogs");
// console.log(text);

// const text = "        HelloWorld"
// const name =text.trim();
// console.log(name ,text.length, name.length)

// const text='a,b,c,d,e,f';
// const myArray=text.split(',');
// console.log(myArray);

// const str = "Please locate where 'locate' occurs!";
// // console.log(str.lastIndexOf("occurs",21));
// console.log(str.match(/ate/g));

// const arr = [3, 5, 7];
// arr.foo = 'hello';

// for (const i in arr) {
//     console.log(i);
// }

// for (const i of arr) {
//     console.log(i);
// }

// function map(f, a) {
//     const result = new Array(a.length);
//     for (let i = 0; i < a.length; i++) {
//         result[i] = f(a[i]);
//     }
//     return result;
// }

// const f = function (x) {
//     return x * x * x;
// }

// const numbers = [0, 1, 2, 5, 10];
// const cube = map(f, numbers);
// console.log(cube);

// function calcAge(birhYear) {
//   const age = 2023 - birhYear;
//   return age;
// }

// console.log(calcAge(1975));

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const mainMenu=["pizza","pasta"];
for (const item of mainMenu){
  console.log(mainMenu);
}
