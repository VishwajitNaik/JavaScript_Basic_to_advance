// console.log("Hi I Am JavaScript Developer");

// const a = 10, b =20;
// console.log("Addition =", a + b);

// if (a > b) {
//     console.log("a is Greter than b");
// }else {
//     console.log("b is a greter than a");
// }

// const chek = a > b ? a : b;
// console.log(chek);



// for (let i = 0; i <= 5; i++) {
//     const evenOdd = i%2 == 0 ? "even" : "odd";
//     console.log(evenOdd); 
    
// }



// let arr = []; // empty array

// let arr1 = [1,2,3,4,5] 
// console.log(arr1);

// for(let i = 1; i <= 5; i++){
//     const even = i%2 == 0 ? arr.push(i) :arr1.splice(i, 1);
// }
// console.log(arr);
// console.log(arr1);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// let arr = []; // empty array

// let arr1 = [1, 20, 30, 40, 5];
// console.log(arr1);

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] % 2 === 0) {
//     arr.push(arr1[i]); // add even number to arr
//   } else {
//     // remove odd number from arr1
//     arr1.splice(i, 1);
//     i--;
//   }
// }

// console.log(arr);
// console.log(arr1);

// const fruitsKG = ["banana","chiku","grephs"];
// const KG = [2,4,6];

// console.log(fruitsKG);
// fruitsKG.push("kaligad", 4);
// console.log(fruitsKG);

// // fruitsKG.pop()

// // fruitsKG.shift();

// // fruitsKG.unshift('Strobery', 4)

// const a3 = fruitsKG.concat(KG);

// const slice_work = a3.slice(1,2);

// console.log(slice_work);



// +))_)))()()()()())() ArrAYS Methods _)_)_)_)_)_)_)__)_)_ 
/**/
const heros = ["Roky", "Allu", "mahesh", "Ram", "NTR", "Nitin", "chiranjivi"]
const ratings = [4,5,6,7,8];

const SlicedItem = heros.slice(2,6);

const dmyHros = [];

for (let i = 0; i < SlicedItem.length; i++) {
    dmyHros.push(SlicedItem[i]);
    
}

const rev = dmyHros.reverse()

console.log(ratings);
const jon = rev.join(` ${ratings[0]} `);


console.log(jon);

// rev.join("_");




/*

for (let i = 0; i < ratings.length; i++) {
    // const x = ratings.indexOf(5)
    // console.log(ratings[i]);
    if (ratings[i] == ratings.indexOf(5)) {
        console.log(1);
    }
    
}
*/



const arr = [0,0,0,0,0,0,0]
for (let i = 0; i < arr.length; i++) {
    const removed = arr.splice(i,3, 3);
    
}
console.log(arr);