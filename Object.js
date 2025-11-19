// 1. Create an Empty Object
let person = {};                 // Method 1: Object literal


// 2. Object with Properties & Method
let persons = {
  name: "John",
  age: 25,
  IntroduceYou: function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
};
person3.IntroduceYou();


// 3. Method to Greet Students
person3.greetStudent = function(student) {
  console.log(`Hello ${student.name}, Welcome to the Coding School!`);
};
let student = { name: "Asha" };
person3.greetStudent(student);


// 4. Access Object Properties
console.log(person3.name);       
console.log(person3["age"]);   


// 5. Add New Property
person3.email = "shan@example.com";       
person3["phone"] = "1234567890";         

// 6. Remove Property
delete person3.phone;


// 7. Check Property Exists
console.log("name" in person3);           
console.log(person3.hasOwnProperty("age")); 


// 8. Merge Two Objects
let studentObj = { name: "Asha", age: 21 };
let courseObj = { course: "JavaScript", duration: "3 months" };

let studentCourse1 = { ...studentObj, ...courseObj };  
let studentCourse2 = Object.assign({}, studentObj, courseObj); 

console.log(studentCourse1, studentCourse2);


// 9. Check for Specific Property
if ("address" in person3) {
  console.log("Address is there");
} else {
  console.log("Address not found");
}


// 10. Convert Object to JSON
let book = { title: "JS Basics", author: "Adam", year: 2024 };
let jsonString = JSON.stringify(book);
console.log(jsonString);


// 11. Array of Objects
let students = [
  { name: "Asha", age: 21, gpa: 3.7 },
  { name: "John", age: 22, gpa: 3.5 },
  { name: "Sara", age: 20, gpa: 3.8 }
];
console.log(students);


// Part 2: ES6 Concepts
// 12. Destructure name and age
let student1 = { name: "Asha", age: 21, gpa: 3.7 };
let { name, age } = student1;
console.log(name, age);


// 13. Shorthand Property Names
function createPerson(name, age) {
  return { name, age }; // shorthand
}
console.log(createPerson("John", 25));


// 14. Clone and Update using Spread Operator
let person4 = { name: "John", age: 25 };
let updatedPerson = { ...person4, age: 26 };
console.log(updatedPerson);


// 15. Convert Object to Array and Back
let object1 = { a: 1, b: 2 };
let entriesArr = Object.entries(object1);   
let newObject = Object.fromEntries(entriesArr); 
console.log(entriesArr, newObject);


// 16. Method to Calculate Tax
let employee = {
  name: "Alice",
  salary: 50000,
  calculateTax() {
    return this.salary * 0.1; 
  }
};
console.log(employee.calculateTax());


// 17. Optional Chaining
let user = {
  profile: { address: { city: "New York" } }
};
console.log(user.profile?.address?.city);  
console.log(user.profile?.phone?.number);  


// 18. Merge User & Contact Info
let userInfo = { name: "Asha", age: 21 };
let contactInfo = { email: "asha@example.com", phone: "1234567890" };

let userDetails = { ...userInfo, ...contactInfo };
console.log(userDetails);

