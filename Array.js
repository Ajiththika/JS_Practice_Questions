// ===============================
// JavaScript Arrays Full Answer Sheet
// ===============================

// Given array
let numbers = [1, 2, 36, 7];

// 1. Access First and Last Elements
console.log(numbers[0]);                          // Method 1: Index
console.log(numbers[numbers.length - 1]);         // Method 2: Last index
console.log(numbers.at(0));                       // Method 3: .at()
console.log(numbers.at(-1));                      // Method 4: .at(-1)

// 2. Add Elements (Beginning & End)
numbers.push(10);                                 // Method 1: push()
numbers.unshift(0);                               // Method 1: unshift()
console.log(numbers);

numbers = [0, ...numbers, 10];                    // Method 2: Spread operator
console.log(numbers);

// 3. Remove First and Last Elements
numbers.pop();                                    // Method 1: pop()
numbers.shift();                                  // Method 1: shift()
console.log(numbers);

let removedArray = numbers.slice(1, -1);          // Method 2: slice()
console.log(removedArray);

// 4. Loop Through Array (for loop)
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 5. Loop using forEach()
numbers.forEach(num => console.log(num));

// 6. Find Maximum & Minimum
let max1 = Math.max(...numbers);                  // Method 1: Math.max
let min1 = Math.min(...numbers);                  // Method 1: Math.min
console.log(max1, min1);

let sortedNums = [...numbers].sort((a, b) => a - b); // Method 2: sort()
console.log("Min:", sortedNums[0], "Max:", sortedNums[sortedNums.length - 1]);

// 7. Check if number 36 exists
console.log(numbers.includes(36));                // Method 1: includes()
console.log(numbers.indexOf(36) !== -1);          // Method 2: indexOf()
console.log(numbers.find(num => num === 36) !== undefined); // Method 3: find()

// 8. Sum of Elements
let sum = numbers.reduce((total, num) => total + num, 0); // Method 1: reduce()
console.log(sum);

let total = 0;                                    // Method 2: for loop
for (let num of numbers) total += num;
console.log(total);

// 9. Sort Array (Ascending)
numbers.sort((a, b) => a - b);
console.log(numbers);

// 10. Reverse Array
numbers.reverse();
console.log(numbers);

// 11. Filter numbers greater than 5
let filtered = numbers.filter(num => num > 5);
console.log(filtered);

// ===============================
// Part 2: Advanced ES6+ Array Methods
// ===============================

let arr = [10, 15, 20, 25, 30];

// Access first & last element
console.log(arr[0], arr[arr.length - 1]);

// Filter even numbers
let even = arr.filter(num => num % 2 === 0);
console.log(even);

// Find student with grade A
const students = [
  { name: 'Alice', grade: 'B' },
  { name: 'Bob', grade: 'A' },
  { name: 'Charlie', grade: 'C' }
];
let topper = students.find(s => s.grade === 'A');
console.log(topper);

// Sum using reduce()
let totalSum = arr.reduce((sum, num) => sum + num, 0);
console.log(totalSum);

// Merge arrays using spread
let a = [1,2,3], b = [4,5,6];
let merged = [...a, ...b];
console.log(merged);

// Destructuring - first two elements
let sample = [100, 200, 300, 400];
let [first, second] = sample;
console.log(first, second);

// Flatten nested array
let nested = [[1,2],[3,4],[5,6]];
let flatArray = nested.flat();
console.log(flatArray);

// Rest parameter - average
function average(...scores) {
  let total = scores.reduce((sum, num) => sum + num, 0);
  return total / scores.length;
}
console.log(average(80, 90, 100));

// Check using includes()
console.log(arr.includes(25));

// Convert string to array
let chars = Array.from("HELLO");
console.log(chars);

// Access last element using .at()
console.log(arr.at(-1));

// ===============================
// END OF SHEET
// ===============================
