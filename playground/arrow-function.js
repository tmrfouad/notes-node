var square = x => x * x;
console.log(square(9));

const user = {
  name: 'Tamer',
  sayHi: () => {
    console.log(arguments);
    console.log(`hi. I'm ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`hi. I'm ${this.name}`);
  }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
