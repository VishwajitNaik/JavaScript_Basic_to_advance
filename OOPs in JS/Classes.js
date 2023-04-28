// class product {
//   display(){
//     console.log("Vishwajit naik");
//   }
// }

// const p = new product();

// p.display()

//----

// class product {
//   constructor(n, p, d=10){
//     this.name = n
//     this.price = p
//     this.discount = d
//     // console.log(n,p);
//     // console.log(this);
//   }
//   display(){
//     console.log(`Very expensive designed t-shirt ${this.name} with price ${this.price}`);
//   }

//   expDescount(){
//     let newPrice = this.price*(Math.floor(100-this.discount)/100)  
//     return newPrice;
//   }

// }

// const p = new product("Visjwajit naik", 101, 10);
// console.log(p.expDescount());
// const p1 = new product("Visjwajit", 201, 10);
// console.log(p1.expDescount());

// console.log(p, p1);

// this

// class product {
//   constructor(n,p){
//     console.log("colling the constructur");
//     this.name = n;
//     this.price = p;
    
//   }
//   display(){
//     console.log(`${this.name} ${this.price}`);
//   }
// }

// const p = new product("T-Shirt", 400);
// console.log(p);

// p.display()


// function product(n,p){
//   this.name = n;
//   this.price = p;
// }

// const p = new product("Iphone 14", 100000);
// console.log(p);


// *******************************
// const product = (n,p) =>{     *
//   this.name = n;              *
//   this.price = p;             *   
// }                             *
// const p = new product("x", 4) *
// *******************************


// let obj = {
//   x:10, y:20,
//   display(){
//     console.log(this.x);
//   }
// }

// obj.display();

class product{
  // discount;
  #rating = 9;
  #name;
  desition = "custom";
constructor(n,p,d){
  console.log("calling the constructor");
  this.#name = n;
  this.price = p;
  this.discount = d
}

static customeMethod(){
  console.log("calling the custome stati methods");
} 
display(){
  console.log(`display product : ${this.#name} ${this.price} ${this.#rating} ${this.discount}`);
}
}

const p = new product("iphone 14", 100000,10)
console.log(p);

p.display()
const p1 = new product()
product.customeMethod()