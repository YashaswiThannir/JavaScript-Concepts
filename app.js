//understanding hoisting


b();//outputs Hey Sup? as memory space is created for the function name and code inside the function
console.log(a); //outputs undefined as for variables memory space is created and the value is unknown initially
var a = "hello ppl";
function b(){
    console.log("Hey Sup?");
}

