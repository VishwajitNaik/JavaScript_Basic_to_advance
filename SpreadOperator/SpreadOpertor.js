let one = [1,2,3,4]
let two = [5,6,7,8,9,10,20]

two.splice(2,3,30, 40)
console.log(two);

const three = [...one.slice(1,3), ...two.splice(2,3,30, 40)]
console.log(three);