// Display current date and time using your method
const today = new Date();
console.log("Date (toDateString):", today.toDateString());
console.log("Date (toLocaleDateString):", today.toLocaleDateString()); 
console.log("Time (toLocaleTimeString):", today.toLocaleTimeString()); 

// Calculate days until New Year
const newYear = new Date(today.getFullYear() + 1, 0, 1);
const diffTime = newYear - today;
const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log("Days until New Year:", remainingDays);
