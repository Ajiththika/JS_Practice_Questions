//question 01
const price = 92.345;
const roundedPrice = price.toFixed(2);
console.log(`${roundedPrice}`)

//question 02
const fullName = "ajiththika sivathas";
const name = fullName.trim().toUpperCase();
console.log(name); 

//question 03
let item = "Keyboard";
let rupees = 250;
console.log("Item:".padEnd(10) + item);
console.log("Price:".padEnd(10) + rupees);

//question 04
let value = "123abc";
let numberValue = Number(value);
if (Number.isNaN(numberValue)) {
  console.log("Conversion failed: Not a valid number");
} else {
  console.log(`Converted number: ${numberValue}`);
}

//question 05
let prices = [500.25, 1200, 99.99, 234.32];
let total = prices.reduce((sum, price) => sum + price, 0);
let formattedTotal = total.toLocaleString('en-IN', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
console.log(`Total Price: Rs ${formattedTotal}`);

//question 06
let text = "hello@@world@@!";
let cleanedText = text.replace(/[^a-zA-Z0-9\s]/g, "");
console.log(`Cleaned text: ${cleanedText}`);