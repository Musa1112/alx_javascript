function add(x, y) {
  // Check if the arguments are numbers
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("Arguments must be numbers");
  }

  // Add the two numbers
  return x + y;
}

console.log(add(4, 85)); // 89
