console.log("== Array Operations by Deepika ==");

// Create arrays
let numbers = [10, 20, 30, 40, 50];
let fruits = ["Apple", "Banana", "Mango"];
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);

// Add & remove elements
numbers.push(60); 
numbers.shift();
console.log("Updated Numbers:", numbers);

// Loop through arrays
fruits.forEach((fruit, i) => console.log(`Fruit ${i + 1}: ${fruit}`));