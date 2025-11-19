const exampleStr = "Hello! I am studying at Uki. #it #coding @English";

// 1. Check if a string contains only digits
function onlyDigits(str) {
    return /^\d+$/.test(str);
}
console.log("Only Digits:", onlyDigits("12345")); 

// 2. Validate an Email
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log("Valid Email:", validateEmail("test@example.com")); 

// 3. Validate 10-digit Phone Number
function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
}
console.log("Phone Valid:", validatePhone("1234567890")); 

// 4. Find All Numbers in a String
function findNumbers(str) {
    return str.match(/\d+/g) || [];
}
console.log("Numbers Found:", findNumbers(exampleStr)); 

// 5. Replace Multiple Spaces with One
function collapseSpaces(str) {
    return str.replace(/\s+/g, ' ');
}
console.log("Collapsed Spaces:", collapseSpaces("Hello   World")); 

// 6. Check if String Starts with "Hello"
function startsWithHello(str) {
    return /^Hello/.test(str);
}
console.log("Starts with Hello:", startsWithHello("Hello everyone")); 

// 7. Check if String Ends with ".com"
function endsWithCom(str) {
    return /\.com$/.test(str);
}
console.log("Ends with .com:", endsWithCom("example.com")); 

// 8. Extract All Words
function extractWords(str) {
    return str.match(/\b\w+\b/g) || [];
}
console.log("All Words:", extractWords(exampleStr)); 

// 9. Replace All Vowels with *
function replaceVowels(str) {
    return str.replace(/[aeiou]/gi, '*');
}
console.log("Vowels Replaced:", replaceVowels("Hello World")); 

// 10. Validate Password (≥6 Characters)
function validatePassword(str) {
    return /^.{6,}$/.test(str);
}
console.log("Password Valid:", validatePassword("abc123")); 

// 11. Only Letters
function lettersOnly(str) {
    return /^[A-Za-z]+$/.test(str);
}
console.log("Letters Only:", lettersOnly("HelloWorld")); 

// 12. Extract Hashtags
function extractHashtags(str) {
    return str.match(/#\w+/g) || [];
}
console.log("Hashtags:", extractHashtags(exampleStr)); 

// 13. Contains At Least One Digit
function hasDigit(str) {
    return /\d/.test(str);
}
console.log("Has Digit:", hasDigit(exampleStr));

// 14. Contains At Least One Uppercase Letter
function hasUppercase(str) {
    return /[A-Z]/.test(str);
}
console.log("Has Uppercase:", hasUppercase(exampleStr)); 

// 15. Contains At Least One Lowercase Letter
function hasLowercase(str) {
    return /[a-z]/.test(str);
}
console.log("Has Lowercase:", hasLowercase(exampleStr)); 

// 16. Contains At Least One Special Character
function hasSpecialChar(str) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(str);
}
console.log("Has Special Char:", hasSpecialChar("Hello@123")); 

// 17. Validate Date (DD/MM/YYYY)
function validateDate(str) {
    return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(str);
}
console.log("Valid Date:", validateDate("25/12/2025")); 

// 18. Find Words Starting with a Capital Letter
function capitalWords(str) {
    return str.match(/\b[A-Z][a-z]*\b/g) || [];
}
console.log("Capital Words:", capitalWords(exampleStr)); 

// 19. Remove Non-Alphanumeric Characters
function removeNonAlphanumeric(str) {
    return str.replace(/[^a-zA-Z0-9 ]/g, '');
}
console.log("Cleaned Text:", removeNonAlphanumeric(exampleStr));








