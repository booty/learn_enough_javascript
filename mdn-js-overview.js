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

/*
# Objects

Objects are key-value pairs. Keys are strings or symbols. Values can be anything. 
Similar to dictionaries in Python, or hashes in Ruby/Perl. Or associative arrays 
in PHP, but nobody uses that.
*/

const robot = {
  name: "RX-009 Facesmasher",
  left_arm: "Galaxy Punch",
  right_arm: "Titanium Hammer",
  special_abilities: [
    "Nipple Twister",
    "Fart", // Github Copilot suggested this (!!)
    "Belly Flop",
  ],
  origin: {
    planet: "Mars",
    galaxy: "Milky Way",
    company: "Robodroid, Inc.",
  },
};

console.log(
  `robot.name: ${robot.name} (created on ${robot.origin.planet} by ${robot.origin.company})`
);

/*
# Arrays

Honestly, arrays are just objects with integer keys and a special property called length.
*/

const tragedies = ["Hamlet", "Macbeth", "Romeo and Juliet", "King Lear"];
console.log(`tragedies[0]: ${tragedies[0]}`);

/*
If you want to be cool, iterate arrays with for...of
*/

for (const tragedy of tragedies) {
  switch (tragedy) {
    case "Hamlet":
      console.log("Hamlet! Yeah, totally sick! To be or not to be...");
      break;
    case "Macbeth":
      console.log("Niiiiice. Out, out, brief candle! Amirite?");
      break;
    default:
      console.log(`${tragedy}? Sorry, I don't know that one.`);
  }
}

reviews = tragedies.map((tragedy) => {
  return `...I loved ${tragedy}!\n`;
});
console.log(`My reviews of the Bard's plays:\n${reviews}`);

/*
# Prototypes

Prototypes provide inheritance. They're like classes in other languages.
*/

function Organism(name) {
  this.name = name;
  this.species = "unknown";
  this.hit_points = 100;

  this.greeting = function () {
    return "....";
  };
}

function Human(name) {
  this.name = name;
  this.species = "human";
  this.hit_points = 100;

  this.greeting = function () {
    return `Hi, I'm ${this.name}!`;
  };
}

Human.prototype = new Organism();

let alien = new Organism("Xenomorph");
let human = new Human("Ripley");
console.log(`alien.greeting(): ${alien.greeting()}`);
console.log(`human.greeting(): ${human.greeting()}`);

/*
# Javascript Classes

Javascript classes are syntactic sugar for prototypes. They're not real classes.
*/

class Athlete {
  constructor(name) {
    this.name = name;

    this.greeting = function () {
      return `I'm ${this.name}. I just like to work out, you know?`;
    };
  }
}

class BaseballPlayer extends Athlete {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  greeting() {
    return `I'm ${this.name} and I'm a ${this.position}.`;
  }
}

let athlete = new Athlete("Bob Crossfit");
let baseball_player = new BaseballPlayer("Babe Ruth", "pitcher");
console.log(`athlete.greeting(): ${athlete.greeting()}`);
console.log(`baseball_player.greeting(): ${baseball_player.greeting()}`);

/* 
# Modifying Native Objects

This is monkey patching. It's a bad idea. Don't do it. But, I mean... you can.
*/

String.prototype.obscenify = function () {
  return `friggin ' ${this}!`;
};

console.log(`"poptarts".obscenify(): ${"poptarts".obscenify()}`);

String.prototype.is_blank = function () {
  return /^\s*$/.test(this);
};

console.log(`"   ".is_blank(): ${"   ".is_blank()}`);
console.log(`"  x  ".is_blank(): ${"  x  ".is_blank()}`);
console.log(`"".is_blank(): ${"".is_blank()}`);
console.log(`" ".is_blank(): ${" ".is_blank()}`);
