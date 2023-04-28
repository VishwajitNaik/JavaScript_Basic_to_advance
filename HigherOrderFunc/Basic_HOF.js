const powerTwo = (n) => {
    return n**2
} 

const powerCube =(powerTwo, m) =>{
    return powerTwo(m) * m
}
console.log(powerCube(powerTwo, 3));



function sayHello () {
    return () =>{
        console.log("Hello Vishwa");
    }    
}

let gueesValue = sayHello();
console.log(gueesValue)

const higherOrder = n => {
    const Onefun = m => {
      const twoFun = p => {
        return n + m + p;
      };
      return twoFun;
    };
    return Onefun;
  };
  
console.log(higherOrder(2)(3)(4)); // Output: 9


const myNums = [2,3,4,5]
const sumArr = arr =>{
    let total = 0
    arr.forEach(ele => {
        total += ele
    });
    return total
}

console.log(sumArr(myNums));

function oneMoreHello() {
    console.log("Hello Vishwa !", Math.random());
}
setInterval(oneMoreHello, 1000)
setInterval(oneMoreHello, 2000)


