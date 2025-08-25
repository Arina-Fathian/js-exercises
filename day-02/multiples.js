const num = 19;

//////with for
const array = [];
for (i = 1; i <= 200; i++) {
  if (i % num !== 0) {
    continue;
  }
  array.push(i);
}
console.log(array);

/////with while
let j = 1;
const array2 = [];
while (j <= 200) {
  if (j % num !== 0) {
    j++;
    continue;
  }
  array2.push(j);
  j++;
}
console.log(array2);
