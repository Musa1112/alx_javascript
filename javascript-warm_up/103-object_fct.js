class MyObject {
  constructor(value) {
    this.value = value;
  }

  incr() {
    this.value += 1;
  }
}

const myObject = new MyObject(12);

console.log(myObject); // { type: 'object', value: 12 }

myObject.incr();
console.log(myObject); // { type: 'object', value: 13 }

myObject.incr();
console.log(myObject); // { type: 'object', value: 14 }

myObject.incr();
console.log(myObject); // { type: 'object', value: 15 }
