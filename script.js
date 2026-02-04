
let fArr31 = () => console.log("fArr31 => ", "Write code!..");
fArr31();

let fArr30 = () => console.log("fArr30 => ", "Do it!..");
fArr30();

let fArr29 = () => console.log("fArr29() => ", "Coding..");
fArr29();

let fArr28 = () => console.log("fArr28() => ", "Push up!");

let fArr27 = () => console.log("fArr27() => ", "Speak..");
fArr27();

let fArr26 = () => console.log("fArr26() => ", "Run");
fArr26();

let fArr25 = () => console.log("fArr25() => ", "You're going well..")
fArr25();

let fArr24 = () => console.log("fArr24() => ", "Fight!");
fArr24();

let fArr23 = () => console.log('fArr23() => ', 'Stay strong..');
fArr23();

let fArr21 = a => a + 24;
let fArr22 = () => console.log("fArr(21) => ", fArr21(21));
fArr22();

let fArr20 = a => a + 23;
console.log("fArr20(20) => ", fArr20(20));

let fArr19 = a => a + 22;
console.log("fArr19(19) => ", fArr19(19));

let fArr18 = (a) => a + 21;
console.log("fArr18(18) => ", fArr18(18));

let fArr17 = (a) => a + 20;

let fArr16 = (a) => a + 19;
console.log("fArr16(16) => ", fArr16(16));

let fArr15 = (a) => a + 18;
console.log("fArr15(15) => ", fArr15(15));

let fArr14 = (a) => a + 17;
console.log("fArr14(14) => ", fArr14(14));

let fArr13 = (a) => a + 16;
console.log("fArr13(13) => ", fArr13(13));

let fArr12 = (a) => a + 15;
console.log("fArr12(12) => ", fArr12(12));

let fArr11 = (a) => a + 14;
console.log("fArr11(11) => ", fArr11(11));

let fArr10 = (a) => a + 13;
console.log("fArr10(10) => ", fArr10(10));

//функція-стрілка
let fArr9 = (a, b) => a + b;
console.log("fArr9(9, 12) => ", fArr9(9, 12));

//функція-стрілка
let fArr8 = (a, b) => a + b;
console.log("fArr8(8, 11) => ", fArr8(8, 11));

//функція-стрілка
let fArr7 = (a, b) => a + b;
console.log("fArr7(7, 10) => ", fArr7(7, 10));

let fArr6 = (a, b) => a + b;
console.log("fArr6(6, 9) => ", fArr6(6, 9));

let fArr5 = (a, b) => a + b;
console.log("fArr5(5, 8) => ", fArr5(5, 8));

// функція-стрілка
let fArr4 = (a, b) => a + b;
console.log("fArr4(4, 7) => ", fArr4(4, 7));

// функція-стрілка
let fArr3 = (a, b) => a + b;
console.log("fArr3(3, 7) => ", fArr3(3, 7));

// функція-стрілка
let fArr2 = (a, b) => a + b;
console.log("fArr2(3, 6) => ", fArr2(3, 6));

//функція стрілка
let fArr = (a, b) => a + b;
console.log(fArr(3, 5));

//функція-стрілка
// let fAr = (a, b) {
//   return a + b;
// }

//функція-стрілка
// let sum_div_ar = (a, b);
// return a + b;

// console.log(sum_div_ar(225, 90));

//функція-стрілка 11:40
function sum_ar(a, b) {
  return a + b;
}

console.log(sum_ar(225, 90));

let sum_true_ar = (a, b) => a + b;
console.log(sum_true_ar(225, 90));

//функція new
let f = new Function("x", "y", "return x + y");
console.log("New: ", f(3, 5));

//функція стрілка
let arrayFunction = (b, c) => b + c;
let aF = (b) => 2 * b;
console.log(arrayFunction(5, 5), aF(3));

// функції 10:32
let empty = function (a, b) {
  if (!a || !b) return;
  return a / b;
};
console.log(empty(3, 4));

// функції 9:09
function double(valiable) {
  return 2 * valiable;
}
function sum(a, b) {
  let c = a + b; // локальні змінні зазвичай потрібні, щоб передавати деякі дані в наступну функцію
  return double(c) + a;
}
console.log(sum(3, 5));

// функції 6:30

let count = function (count1 = 1, count2 = 9, count3 = 15) {
  let resultCount = count1 + count2 + count3;
  console.log("resultCount = ", resultCount);
};

count();

// функції 5:12

function count_f(count1 = 1, count2 = 9, count3 = 15) {
  let resultCount = count1 + count2 + count3;
  console.log("resultCount = ", resultCount);
}

count_f();

let person = {
  name: "ComeBack",
  age: 40,
};
for (let a in person) {
  console.log(a, person[a]);
}

let arr = ["Banana", "Orange", "Apple", "Pear"];

for (a = 0; a < arr.length; a++) {
  console.log(arr[a]);
}

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let age = 40;
let prefix;

if (age === 1) {
  prefix = "year";
} else {
  prefix = "years";
}

console.log(`You are ${age} ${prefix} old`);

let resultAge = age === 1 ? "year" : "years";
console.log(age + " " + resultAge);

let timeOfOder = 20;
let smsClosed = "Sorry the office is closed.";

if (timeOfOder < 9 || timeOfOder > 18) {
  console.log(smsClosed);
}

let skills = ["web", "bots", "seo"];

let levelUp = skills.push("ppc", "txt");

console.log(levelUp);
console.log(skills);

console.log(skills.join(" + "));
console.log(skills.slice(0, 2));
console.log(skills.splice(4, 1, "tgt"));
console.log(skills.reverse());

let balanceString = "Liberty";

console.log(`Will be ${balanceString}`);

let balanceBooling = true;

console.log(`It is ${balanceBooling}`);

let random;

console.log(`random is ${random}`);

let liberty_1 = Symbol("id");

console.log(liberty_1);

let balanceObject = {
  profession: {
    first: "Front-end",
    second: "Bot developer",
  },
  credo: "Be brave",
};

console.log(balanceObject);
