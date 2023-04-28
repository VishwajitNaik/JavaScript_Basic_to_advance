const heros = ['q','w','e','r','t']
// const copy = []
// for(let i= 0; i  < heros.length; i++)
// {
//     const ele = heros[i]
//     console.log(`Hero is ${ele}`);
//     copy.push(heros[i])
// }
// console.log("copy",copy);

const copy = []
for(const ele of heros){
    console.log(`Heros is ${ele}`);
    copy.push(ele)
}

console.log(copy);