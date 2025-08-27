const userNames = [
  "ehsan",
  "Saman",
  "zahra",
  "yasaman",
  "sima",
  "hasan",
  "simin",
  "sina",
];

const newArray = [];

userNames.forEach((item) => {
  if (item[0] === "s" || item[0] === "S") {
    const userObject = { 
        name: item,
        index: userNames.indexOf(item) };
    newArray.push(userObject);
  }
});

console.log(newArray);
