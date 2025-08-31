// const array = [];
// for (let i = 0; i <= 10; ) {
//   const randomNum = Math.round(Math.random() * 100);
//   if (randomNum < 75) {
//     continue;
//   }
//   array.push(randomNum);
//   i++;
// }
// console.log(array);

function randomNumber(length, range, min) {
  const array = [];
  for (let i = 0; i < length; ) {
    const randNum = Math.round(Math.random() * range);
    if (randNum < min) {
      continue;
    }
    array.push(randNum);
    i++;
  }
  return array;
}

console.log(randomNumber(10, 100, 75));
