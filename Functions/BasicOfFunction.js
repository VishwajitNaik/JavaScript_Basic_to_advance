
// const arr = ['apple', 2, 'banana', 3, 'Potato', 4];
/*
function Check (a, b) {
    const res = a+b
    return res
}

console.log(Check(5,3)); 
// console.log(Check(10, 6));


function even(a) {
    if(a%2 == 0){
        return true;
    }
    return false
}

console.log(even(5));

// ___________________________

function values (a,b) {
    return a + b;
    console.log(a+b);
}

function multiply(x, y) {
    return x * y
}

let c = values(1,3)
let d = values(1,5)

console.log(values(c,d));

let result = multiply(c,d)
console.log(c,d,result);


function myString () {
    return "Hey I am a String"
}

console.log(myString());


*/

/*
function defaultArgs (x, y=10) {
    return x-y
}

let dftargs =  defaultArgs(5)
console.log(dftargs);
*/

function ArrAsAParameter([n1,n2,n3,n4,n5]){
    return n1+n2+n3+n4+n5
}

let arr = ArrAsAParameter([1,2,3,4,5]);
console.log(arr);


//
function unlimitedArgs () {
    sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
   
    }
    return sum;
}

let sumofnum = unlimitedArgs(1,2,3,4,5);

console.log(sumofnum);


/**/
//

const check = (a,b) =>{
    console.log(`${a} + ${b}`);
    return a+b;
}


console.log(check(3,4));

const sumandDiff = (x,y) =>({sum: x+y, diff: x-y});

console.log(sumandDiff(30,20));


//
var x = function () {
    console.log("Hi I am a Vishwajit");
}

x();



//

(function (name) {
    console.log("Hey I am immediate invoked ");
})();

// 

let sum = function sum(x,y) {
    // console.log("function varible and function name");
    return x+y;
}

console.log(sum(4,5));


