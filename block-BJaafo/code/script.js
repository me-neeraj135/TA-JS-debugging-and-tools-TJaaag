///Get full Name

// function fullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
// // fullName(`Arya`, `Stark`);

// let result = fullName(`Arya`, `Stark`);
// let expected = `Arya stark`;

// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }

// let result = fullName(`Arya`, `Stark`);
// let expected = `Arya Stark`;
// if (result === expected) {
//   throw new Error(`${result} is  equal to ${expected}`);
// }

////   Calculate total amount

function totalAmount(amount, taxRate) {
  return amount + (amount * taxRate) / 100;
}
totalAmount(100, 10);

let result = totalAmount(100, 10);
let expected = 11;

if (result !== expected) {
  throw new Error(`${result} is not equal ${expected}`);
}
