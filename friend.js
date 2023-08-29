function Friend(name) {
  this.name = name;

  this.greeting = function () {
    return "Hi! I'm " + this.name + ".";
  };

  this.palindrome = function (s) {
    if (s.toLowerCase() === s.toLowerCase().split("").reverse().join("")) {
      return "The string " + s + " is a palindrome.";
    } else {
      return "The string " + s + " is not a palindrome.";
    }
  };

  this.should = function (s) {
    return `I SAID, "${s.toUpperCase()}!"`;
  };
}

var friend = new Friend("Bob");
console.log(friend.greeting());
console.log(friend.palindrome("RAcecar"));
console.log(friend.palindrome("hello"));
console.log(friend.should("we're having lasagna for dinner"));
