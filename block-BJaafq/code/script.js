function getSum(numA, numB) {
  return numA + numB;
}

let result, expected;

//test framework
function test(message, cb) {
  try {
    cb();
    console.log(`💗`, message);
  } catch (error) {
    console.log(error);
    console.log(`#️⃣`, message);
  }
}

function testSumA() {
  result = getSum(2, 2);
  expected = 4;
  if (result !== expected) {
    throw new Error(`$(result) is not equal to ${expected}`);
  }
}

test(`adding 2 and 2`, testSumA);

function testSumB() {
  result = getSum(2, 2);
  expected = 8;
  if (result !== expected) {
    throw new Error(`$(result) is not equal to ${expected}`);
  }
}

test(`adding 2 and 2`, testSumB);

function getMul(numA, numB) {
  return numA * numB;
}

let Newresult, Newexpected;

//test framework
function test(message, cb) {
  try {
    cb();
    console.log(`💗`, message);
  } catch (error) {
    console.log(error);
    console.log(`#️⃣`, message);
  }
}

function testMulA() {
  Newresult = getMul(2, 2);
  Newexpected = 5;
  if (Newresult !== Newexpected) {
    throw new Error(`$(Newresult) is not equal to ${Newexpected}`);
  }
}

test(`multiplying 2 and 2`, testMulA);

function testMulB() {
  Newresult = getMul(2, 2);
  Newexpected = 4;
  if (Newresult !== Newexpected) {
    throw new Error(`$(Newresult) is not equal to ${Newexpected}`);
  }
}

test(`multiplying 2 and 2`, testMulB);
