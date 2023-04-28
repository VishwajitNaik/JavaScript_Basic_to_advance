const myMap = new Map();
console.log(myMap.size);

let arr = [
    [1,"v"],
    [1,"vi"],
    [1,"vis"],
    [1,"vish"]
]  

//                        [1     "v"]
arr.map(el => myMap.set(el[0], el[1]))
console.log(myMap)