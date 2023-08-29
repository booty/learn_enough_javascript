// This was formerly titled "Re-Learn Javascript" and that's how I'm using it.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview

// # Data Types

// Haha, there are no integers!
console.log(`Here's a surprise (maybe?) floating point result: ${3 / 2}`); // 1.5
console.log(`Floating point numbers can be a little imprecise: ${0.1 + 0.2}`); // 0.30000000000000004

// BigInts can be arbitrarily large. They're denoted by appending an n to the end of the number.
console.log(
  `BigInts are a new type of number in JS that can be uh, big: ${2n ** 53n}`
); // 9007199254740992n
// Error: Cannot convert a non-integer value to a BigInt
// console.log("BigInt(123.45): ${BigInt(123.45)}");
console.log(
  `BigInt("987102398513208965109328740987410293874"): ${BigInt(
    "987102398513208965109328740987410293874"
  )}`
);

// Converting strings to numbers
console.log(`Number("123"): ${Number("123")}`); // 123
console.log(`Number("123abc"): ${Number("123abc")}`); // NaN
console.log(`parseInt("1.2345"): ${parseInt("1.2345")}`); // 1
console.log(`parseFloat("1.2345"): ${parseFloat("1.2345")}`); // 1.2345

/*
Variables

let is block-scoped
const is block-scoped
var is function-scoped (hoisted) and this is error-prone. Avoid it.
*/

let petType = "kitten";
switch (petType) {
  case "kitten":
    console.log("meow! it's a cat!");
    break;
  case "puppy":
    console.log("woof");
    break;
  default:
    console.log("unknown pet");
}

/*
Error handling

In general, you can't tell the type of error because any object 
can be thrown as an error.
*/

try {
  BigInt("123.45");
} catch (e) {
  console.log("Error caught:", e.message);
}

/*
There is no conditional catch - you need to catch every type of error.
But, you can add some conditional logic in the catch block.
*/

try {
  BigInt("123.45");
} catch (e) {
  if (e instanceof SyntaxError) {
    console.log("SyntaxError caught:", e.message);
  } else if (e instanceof RangeError) {
    console.log("RangeError caught:", e.message);
  } else {
    console.log("Weird, unknown error caught:", e.message);
  }
}
