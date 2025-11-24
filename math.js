// find total 
// method 01
const prices = [80, 120, 360];
const total = prices.reduce((a, b) => a + b);
const discountRate = 0.10;
const discountAmount = total * discountRate;
const finalPrice = total - discountAmount;
console.log("Total Price:", total);
console.log("Discount Amount:", discountAmount);
console.log("Discounted Price:", finalPrice);

// method 02
function calculateTotal(prices, discount) {
  let total = prices.reduce((a, b) => a + b);
  let discountAmount = total * discount/100;
  let finalPrice = total - discountAmount;
  return { 
    total: total, 
    discountedPrice: finalPrice };
}

const price = [80, 120, 360];
const result = calculateTotal(price, 10);

console.log("Total Price:", result.total);
console.log("Discount Amount:", discountAmount);
console.log("Discounted Price:", result.discountedPrice);


// questions 
// 01 Generate 10 random integers between 1 and 100
console.log("Random Numbers (1 to 100):");
for (let i = 0; i < 10; i++) {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
}

// 02 Find largest and smallest value in an array
let arr = [12, 45, 7, 89, 23, 56];
let largest = Math.max(...arr);
let smallest = Math.min(...arr);
console.log("\nLargest Value:", largest);
console.log("Smallest Value:", smallest);

// 03 Generate a 6-digit OTP
let otp = Math.floor(100000 + Math.random() * 900000);
console.log("\nGenerated OTP:", otp);

// 04 Use for...of loop to calculate sum of array values
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log("\nSum of Array Values:", sum);

// 05 Display numbers from 1 to 50 but skip multiples of 5
console.log("\nNumbers 1 to 50 (skip multiples of 5):");
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) continue;
  console.log(i);
}

// 06 Simulate login attempts using do...while loop
console.log("\nLogin Simulation:");
let correctPassword = "1234";
let userInput;
let attempts = 0;
do {
  userInput = prompt("Enter password:"); 
  attempts++;
} while (userInput !== correctPassword);
console.log("Login successful in " + attempts + " attempts!");

// 07 Create a multiplication table using nested loops
console.log("\nMultiplication Table (1 to 10):");
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("--------------------"); 
}















