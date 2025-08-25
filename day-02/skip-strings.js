const array = [10, 20, 40, "arina", 80, 100];
////////with for of
for (const item of array) {
  if (typeof item === "string") {
    continue;
  }
  console.log(item);
}
////////with for
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "string") {
    continue;
  }
  console.log(array[i]);
}
