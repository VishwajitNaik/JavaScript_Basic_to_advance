const arr = ["v","u","t"]
arr.forEach((ele, index, arr) =>{
    console.log("ARROW", index);
})

// ____________________________________________________________________
const heros = ["Allu", "Roky babu", "NTR", "Mahesh Babu", "Naga babu"]
heros.forEach((el, index) =>{
    heros[index] = el.toUpperCase();
    console.log(el.toUpperCase(), index)
})
console.log(heros);

const copy = [];
const upperC = heros.map((el) =>{
    const upperCaseName = el.toUpperCase();
    console.log(upperCaseName)
    return upperCaseName;
    });
copy.push(...upperC)

console.log(copy);


const heorsWithBapu = heros.filter((h) =>{
    const LowerCaseName = h.toLowerCase();
    console.log(LowerCaseName);
    return h.toLowerCase().endsWith('babu')
})
console.log(heorsWithBapu);


//________________________________________


const cart = [10,20,30,50];
const sumCart = cart.reduce((prev,curr)=> prev + curr, 0);
console.log(sumCart);




// all values are number 

const gameScore = [3,5,7,11, 13, 20];
console.log(typeof(gameScore[0]));

const gameScoreCheck = gameScore.every((v) =>typeof v === "number")
console.log("check",gameScoreCheck);


const per2 = gameScore.find((score) => score%2 == 0);
console.log("check", per2);


