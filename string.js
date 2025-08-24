console.log("== String Operations by Deepika ==");

let name = "Deepika";
let greeting = " Hello, " + name + "! ";
console.log("Greeting:", greeting.trim()); // Trim spaces

// Length of string
console.log("Length of name:", name.length);

// Uppercase & lowercase
console.log("Uppercase:", name.toUpperCase());
console.log("Lowercase:", name.toLowerCase());

// Substring and slice
console.log("First 3 letters:", name.substring(0, 3));
console.log("Last 3 letters:", name.slice(-3));

// Replace
let newName = name.replace("Deepika", "Coder Deepika");
console.log("Replaced Name:", newName);

// Split & join
let sentence = "I love learning JavaScript";
let words = sentence.split(" ");
console.log("Words array:", words);
console.log("Joined with hyphen:", words.join("-"));