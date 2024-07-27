let obj = {
  a: 1,
  b: "Zubair",
};
console.log(obj);
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};
rabbit._proto_ = animal; // sets rabbit.[[Prototype]] = animal
class Animal {
  constructor(name) {
    this.name = name;
    console.log("object is created.....");
  }
  eats() {
    console.log("kha rha ho");
  }
  jumps() {
    console.log("khood rha ho");
  }
}
class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("Object is created and he is a lion....");
  }
}
let a = new Animal("Bunny");
console.log(a); 
let l = new Animal("Shera");
console.log(l);
