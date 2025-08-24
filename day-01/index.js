for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log(
  "-----------------------------------جداساز----------------------------------"
);

const array = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

console.log(
  "------------------------------جداساز------------------------------------------"
);

const newArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  newArray.push(array[i]);
}
console.log(newArray);

console.log(
  "--------------------------------جداساز-----------------------------------------"
);

// const arrayReverse = array.reverse();
array.reverse().forEach(function (num, i) {
  console.log(num);
});
