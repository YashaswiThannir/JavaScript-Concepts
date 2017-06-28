//understanding Variable Environment

function b(){
    var num;
    console.log(num); // function b() execution context
}


function a(){
    var num = 2;
    console.log(num); // function a() execution context 
    b();
}



var num = 1; 
console.log(num); //global execution context outputs 1
a();
console.log(num); //global execution context outputs 1

/* 
outputs:
1
2
undefined
1
*/