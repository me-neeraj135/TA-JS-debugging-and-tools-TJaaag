// Add two number

function add(numA, numB) {
  return numA + numB;
}
// console.log(add(4, 5));

function test(msg, callback) {
  try {
    callback();
    console.log(msg);
  } catch (error) {
    console.error();
    console.log(msg);
  }
}

function testAdd() {
  result = add(10, 10);
  expected = 8;
  expect(result).toEqual(expected);
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}
// assertion library
function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
test("should first", () => {
  expect(add(10, 10).toEqual(20));
});
