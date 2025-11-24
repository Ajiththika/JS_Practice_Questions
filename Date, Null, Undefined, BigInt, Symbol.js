// // Display current date and time using your method
// const today = new Date();
// console.log(today.toDateString());
// console.log(today.toLocaleDateString()); 
// console.log(today.toLocaleTimeString()); 

// Calculate days until New Year
const newYear = new Date(today.getFullYear() + 1, 0, 1);
const diffTime = newYear - today;
const remainingDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

console.log("Days until New Year:", remainingDays);

let formattedDate = new Date().toLocaleString("en-US", {
  hour12: false,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});


// questions
// 01 Display Current Date and Time (YYYY-MM-DD HH:MM:SS)

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1;     // Months start from 0 in JS, so add 1
let day = now.getDate();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(`Current Date & Time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);


// 02 Calculate Days Left Until New Year

let today = new Date();                     // Current date
let nextYear = today.getFullYear() + 1;     // Next Year
let newYearDate = new Date(nextYear, 0, 1); // Jan 1 of next year

let timeDiff = newYearDate - today;         // Difference in milliseconds
let daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));  // Convert ms to days

console.log(`Days remaining until New Year: ${daysLeft}`);


