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

  // get
  getName(){
    console.log(this.#name);
  }

  //set 
  setName(newName){
    this.#name = newName;
}


  display(){
    console.log(`display product : ${this.#name} ${this.price} ${this.#rating} ${this.discount}`);
  }
  }
  
  const p = new product("iphone 14", 100000,10)
  console.log(p);
  
//   p.display()
//   const p1 = new product()
//   product.customeMethod()

p.getName();
p.setName("Samsung pro max");
p.getName();