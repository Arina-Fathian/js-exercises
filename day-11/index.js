const arr = [2, 4, 8];

// const arr1 = [];

// num.forEach((i) => {
//   const item = i + sum;
//   arr1.push(item);
//   return arr1;
// });
// console.log(arr1);

//why high order function is important?

function incArray(num, sum) {
  const newArr = [];
  for (const item of num) {
    newArr.push(item + sum);
  }
  return newArr;
}
function decArray(num, sum) {
  const newArr = [];
  for (const item of num) {
    newArr.push(item - sum);
  }
  return newArr;
}
function mulArray(num, sum) {
  const newArr = [];
  for (const item of num) {
    newArr.push(item * sum);
  }
  return newArr;
}
console.log(incArray(arr, 3));
console.log(decArray(arr, 3));
console.log(mulArray(arr, 3));

//so we can use hof here:
function oprationArray(data, cb, num) {
  const newArr = [];
  for (const item of data) {
    newArr.push(cb(item, num));
  }
  return newArr;
}
function inc(item, num) {
  return item + num;
}
function dec(item, num) {
  return item - num;
}
function mul(item, num) {
  return item * num;
}
console.log(oprationArray(arr, inc, 3));
console.log(oprationArray(arr, dec, 3));
console.log(oprationArray(arr, mul, 3));
