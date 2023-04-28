const createSet = new Set()
    createSet.add(2)
    createSet.add(6)
    createSet.add(8)
    createSet.add(2)
    createSet.add("abc")
    createSet.add(["Vihshwa", 13, 2.5])
    console.log(createSet);

    console.log(createSet.has(4));
    console.log(createSet.has(2));

let myArr = [1,2,3,4,5,6,7,8,9];

const arrSet = new Set(myArr);

console.log(arrSet);

console.log(arrSet.clear());
// console.log(arrSet);