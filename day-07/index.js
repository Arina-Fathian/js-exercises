/*reverse strings*/

function reverseString(str) {
  const reverseStr = [...str].reverse().join("");
  return reverseStr;
}
const yourString = reverseString("arina");
console.log(yourString);

/*search name in list */

const nameList = ["sevda", "amir", "bahar", "saman", "ali", "sima", "sara"];

function searchName(name) {
  const userName = name.toLowerCase();
  if (nameList.includes(userName)) {
    return `${userName} is in the list`;
  } else console.log("name is not in the list");
}

const enterName = searchName("Ali");
console.log(enterName);
