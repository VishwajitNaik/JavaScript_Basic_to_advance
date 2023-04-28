const obj = [
{
    id: 101,
    name: "Vishwa",
    email: "vishwajitnaik1999@gmail.com",
    password : "Vishwa@123"
},
{
    id: 102,
    name: "Vaibhav",
    email: "vaibhavnaik1999@gmail.com",
    password : "Vaibhav@123"
},
];

// console.log(obj);

obj.name = "Vishwajit"
// console.log(obj.name);

const arr = []

// arr.push(obj[1].name)
// console.log(arr);

const spliting = []

// spliting.push(obj[1].name[1])
// console.log(spliting);

for (let i = 0; i < obj.length; i++) {
    
    spliting.push(obj[i].name)

    
}

console.log(spliting);




// const Objct = new Object();

//     Objct.id= 1,
//     Objct.age= 24,
//     Objct.name= "Riya",
//     Objct.aim= "place on Google",
//     // console.log(Objct);


// 
function Employee(id, name, salary, work) {
  this.id = id;
  this.name = name;
  this.salary = salary;
  this.work = work;
}

const e = new Employee(101, "Vishwajit", 20000, "Software Engg.");

console.log(e);


// const values = Object.values(Employee)




const score = {
    name: "Vihswajit", 
    age:24, 
    completed: "Diploma",
    pursuing: "B-tech"

}

// Object.freeze(score)
Object.seal(score);
score.id = 100;

score.age = 30;

delete score.name


const keys = Object.keys(score)
const values = Object.values(score)
const entries = Object.entries(score)

console.log("For  keys",keys);
console.log("For values",values);
console.log("for entries",entries);

const x = Object.assign({}, score);
console.log(x);

console.log(score);

