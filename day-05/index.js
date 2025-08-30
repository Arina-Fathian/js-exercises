const array = ["arina", 34, 174, "rozhina", 10];

// array.push("good", "bad");
// array.unshift(22, 101);

// array.shift();
// array.pop();
// array.splice(3, 1);

console.log(array.includes(34, 0));
console.log(array.indexOf("arina", 0));
const newNumber = array.filter((i) => i > 10);
console.log(newNumber);


console.log(array);
