// 1. Round floating number to 2 decimals & show currency using template literals
let price = 123.456;
let formattedPrice = `₹${price.toFixed(2)}`;
console.log(formattedPrice); // ₹123.46

// Another way
let price2 = 987.6543;
console.log(`$${price2.toFixed(2)}`); // $987.65


// 2. Get user's full name in uppercase without extra spaces
let fullName = "   john   doe    ";
let cleanName = fullName.trim().toUpperCase();
console.log(cleanName); // JOHN DOE


// 3. Format receipt using padEnd()
let item = "Keyboard";
let itemPrice = "Rs 250.00";
console.log(item.padEnd(20, " ") + itemPrice);

// Example with multiple items
console.log("Mouse".padEnd(20, " ") + "Rs 150.00");
console.log("Monitor".padEnd(20, " ") + "Rs 5200.00");


// 4. Convert "123abc" safely to number & handle NaN
let value = "123abc";
let converted = parseInt(value); // Extracts numeric part
console.log(converted, typeof converted);

if (Number.isNaN(converted)) {
  console.log("Invalid number");
} else {
  console.log("Valid number:", converted);
}


// 5. Function to total prices & format with commas
function totalPrice(prices) {
  let total = prices.reduce((sum, price) => sum + price, 0);
  return total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
console.log(totalPrice([1000, 250.5, 78.99]));  // 1,329.49


// 6. Clean unwanted characters using replaceAll()
let text = "hello@@world@@!!";
let cleanedText = text.replaceAll("@@", "").replaceAll("!!", "!");
console.log(cleanedText); 

// More advanced cleaning (remove special characters)
let messyText = "##he!!llo@@wor$$ld!!";
let cleanText = messyText.replaceAll(/[^a-zA-Z0-9 ]/g, "");
console.log(cleanText); 
