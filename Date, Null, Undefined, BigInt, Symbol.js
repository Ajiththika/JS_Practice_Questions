// Display current date and time using your method
const today = new Date();
console.log(today.toDateString());
console.log(today.toLocaleDateString()); 
console.log(today.toLocaleTimeString()); 

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

