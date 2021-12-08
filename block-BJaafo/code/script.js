function getFullName(firstName, lastName) {
  return firstName, lastName;
}
let result = getFullName("atul", "waghamare");

let expected = "Atul waghamare";

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

function taxedAmount(amount, taxRate) {
  return amount + amount * taxRate;
}
let finalAmount = taxedAmount(100, 0.2);

let expected = 120;

if (finalAmount !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
