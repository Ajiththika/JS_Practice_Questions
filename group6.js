// question 01
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// question 02
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum);

// question 03
const students = [
  { name: "John", grade: "B" },
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "C" }
];
const topStudent = students.find(student => student.grade === "A");
console.log("Student with grade A:", topStudent);

// question 04
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log("Merged array:", mergedArray);

// question 05
const fruits = ["apple", "banana", "cherry", "grape"];
const [first, second] = fruits;
console.log("First fruit:", first);
console.log("Second fruit:", second);

// question 06
const nested = [1, [2, 3], [4, [5, 6]]];
const flatArray = nested.flat(2);
console.log("Flattened array:", flatArray);

// question 07
function findAverage(...scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}
console.log("Average score:", findAverage(80, 90, 100));

// question 08
const colors = ["red", "green", "blue"];
console.log("Has green?", colors.includes("green")); 
console.log("Has yellow?", colors.includes("yellow")); 

// question 09
const word = "HELLO";
const letters = Array.from(word);
console.log("Array from string:", letters);

// question 10
const cities = ["Chennai", "Delhi", "Mumbai"];
console.log("Last city:", cities.at(-1));
