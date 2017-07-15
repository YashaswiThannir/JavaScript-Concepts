var person = new Object();

person["firstName"] = "Yashaswi";

person["lastName"] = "Thannir";

var firstNameProperty = "firstName";

console.log(person);

console.log(person[firstNameProperty]);

console.log(person.lastName);

person.address = new Object();

person.address.city = "San Jose";

console.log(person["address"]["city"]);

