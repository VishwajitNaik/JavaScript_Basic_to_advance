function myArgs (){
    let args = Array.from(arguments)
    const myArr = args.map(el => el * 2)
    console.log(myArr);
}

myArgs(2,3)
myArgs(2,3,4)

function mySpreadArgs (...args){
    const myArr = args.map(el => el * 2)
    console.log("v2", myArr);
}

mySpreadArgs(7,8,9)

const heros = ["spiderman", "Hulk"]
const added = ["batman", ...heros, "blackSparow"]

console.log(added);

const teacher = "Hitesh Chaudhary"
console.log([...teacher]);

function twoTest(...values){
    console.log(values);
}
console.log(twoTest("Hitesh", "PW"));


