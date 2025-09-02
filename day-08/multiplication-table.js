// simple function
function multiplicationTable(x, y) {
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      const multi = x * y;
      return multi;
    }
  }
}

const multi = multiplicationTable(2, 6);
console.log(multi);
