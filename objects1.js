
var person = ({
    firstname: "Yashaswi",
    lastname: "Thannir",
    address: {
        street: "33 S 3rd Street",
        city:"San Jose",
        zip_code: "95113"
    }
});

function greet(person){
    console.log("Hi " + person.firstname);
}

greet(person);
