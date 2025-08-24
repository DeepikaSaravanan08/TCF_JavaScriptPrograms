console.log("=== JavaScript Extra Programs by Deepika ===\n");

/* 1. Factorial Program */
console.log("== Factorial ==");
let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) fact *= i;
console.log(`Factorial of ${num}: ${fact}\n`);

/* 2. Prime Number Check */
console.log("== Prime Check ==");
let n = 13;
let isPrime = n > 1;
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { isPrime = false; break; }
}
console.log(`${n} is ${isPrime ? "Prime" : "Not Prime"}\n`);

/* 3. Reverse a String */
console.log("== String Reverse ==");
let text = "Deepika";
let reversed = text.split("").reverse().join("");
console.log(`Original: ${text}, Reversed: ${reversed}\n`);

/* 4. Palindrome Check */
console.log("== Palindrome Check ==");
let word = "madam";
let isPalindrome = word === word.split("").reverse().join("");
console.log(`${word} is ${isPalindrome ? "" : "not "}a palindrome\n`);

/* 5. Sum of Array Elements */
console.log("== Sum of Array ==");
let numbers = [10, 20, 30, 40];
let sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum:", sum, "\n");

/* 6. Fibonacci Series */
console.log("== Fibonacci Series ==");
let terms = 7;
let a = 0, b = 1;
for (let i = 1; i <= terms; i++) {
    console.log(a);
    [a, b] = [b, a + b];
}
console.log("");

/* 7. Random Number Generator */
console.log("== Random Number ==");
console.log("Random (1-100):", Math.floor(Math.random() * 100) + 1);