function a(){ //outer reference of a is global execution context
    var myVar = 2;
    function b(){ //outer reference of b is a as its lexically sitting inside function a
        console.log(myVar); //outputs 2
    }
    b();
}

var myVar = 1;
console.log(myVar); //outputs 1
a();


/*
output:
1
2
*/