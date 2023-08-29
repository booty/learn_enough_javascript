const states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function (element) {
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}
console.log("oldskool version:", imperativeUrls(states));

// urls: functional version
var result = states.map((s) => s.toLowerCase().split(/\s+/).join("-"));
console.log("functional version:", result);

const animeNames = ["Goku", "Vegeta", "Gohan", "Trunks", "Piccolo"];

console.log(
  "functional version:",
  animeNames.filter((s) => s[0] == "G")
);

const baseballTeams = [
  "Yankees",
  "Mets",
  "Red Sox",
  "Phillies",
  "Braves",
  "Marlins",
  "Nationals",
  "Orioles",
  "Blue Jays",
  "Rays",
];
console.log(
  "functional version of sum of characters in baseball teams:",
  baseballTeams.reduce((total, team) => total + team.length, 0)
);
