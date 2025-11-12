// question 01
const student = {
  name: "Ajie",
  age: 20,
  grade: "A"
};
const { name, age } = student;
console.log(name); 
console.log(age);  

// question 02
function createStudent(name, age) {
  return {
    name,
    age
  };
}
const newStudent = createStudent("Ajie", 20);
console.log(newStudent); 

// question 03
const student1 = { name: "Ajie", age: 20 };
const updatedStudent = { ...student1, age: 20 };
console.log(updatedStudent); 
console.log(student1);       

// question 04
const person = { name: "Ajie", age: 20 };
const entries = Object.entries(person);
console.log(entries); 
const newObject = Object.fromEntries(entries);
console.log(newObject); 

// question 05
const employee = {
  name: "Ajie",
  salary: 50000,
  calculateTax() {
    return this.salary * 0.1;
  }
};
console.log(employee.calculateTax()); 

// question 06
const user = {
  profile: {
    name: "Ajie"
  }
};
console.log(user.profile?.name);     
console.log(user.profile?.address?.city); 

// question 07
const userInfo = { name: "Ajie", age: 30 };
const contactInfo = { email: "ajiththika17@gmail.com", phone: "0758560265" };
const mergedUser = { ...userInfo, ...contactInfo };
console.log(mergedUser);

