// class is a feature of es6
class Animal {
  // a constructor method allows us to setup initial properties for our object
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
    this.age = props.age;
  }
}

// we can "extend" (copy) the properties from another class by using the "extend" keyword
class Dog extends Animal {
  constructor(props, type) {
    // using extend and super, we now have
    // name, age, and color as part of this constructor too
    super(props);
    this.type = type;
  }

  // lexical arrow function
  speak = () => {
    console.log(`${this.name} is barking`);
  }

  // same as the above:
  // Dog.prototype.speak = function() {
  //   return `${this.name} is barking`;
  // }
}

// we instantiate (or create) a new object the same way as with constructor functions
// "const" is new for us, this means that this word can no longer be used
const spot = new Dog({ name: 'Spot', color: 'spotted', age: 5}, 'dalmation');

console.log(spot.speak());

// method -> a function that is attached to a property on an object

// function whatever() {
//   // scope is set to this function
// }

// let whatever = () => {
//   // this gets the scope of whatever it is in -> if just placed in the browser, it's context
//   // (object it belongs to) is the window
// }

// function a() {
//   // has it's own "this"
//   function b() {
//     // has it's own "this"
//     let c = () => {
//       // it's "this" is from function b
//       let d = () => {
//         // it's "this" is from function b
//       }
//     }
//   }
// }