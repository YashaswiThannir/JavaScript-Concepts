//JSON stringify and JSON parse

var objectLiteral = {
    firstName: "Yashaswi",
    lastName: "Thannir",
    isValid: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{  "firstName": "Yashaswi",  "lastName": "Thannir", "isValid": true}');

console.log(jsonValue);