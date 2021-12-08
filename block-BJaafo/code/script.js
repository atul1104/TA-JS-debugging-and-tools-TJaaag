function getFullName(firstName, lastName) {
  return firstName, lastName;
}
let result = getFullName("atul", "waghamare");

let expected = "Atul waghamare";

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
