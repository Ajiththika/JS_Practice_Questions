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
  let discountAmount = total * discount;
  let finalPrice = total - discountAmount;
  return { 
    total: total, 
    discountedPrice: finalPrice };
}

const price = [80, 120, 360];
const result = calculateTotal(price, 0.10);

console.log("Total Price:", result.total);
console.log("Discount Amount:", discountAmount);
console.log("Discounted Price:", result.discountedPrice);
















