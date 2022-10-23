class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirstName: string, theLastName: string) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
}

// let's create an instance
let myCustomer = new Customer("Martin", "Dixon");

myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);