let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Lim";
let lastName: string = "Wei Lee";

// let's break it
/*
found = 0;
grade = "A";
firstName = false;
*/
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);

// use template Strings
console.log(`Hi ${firstName} ${lastName}`);