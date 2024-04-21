let string = "desafio target";
let chars = [];

for (char of string) {
  chars.push(char);
}

let reversedString = "";

for (let i = chars.length - 1; i >= 0; i--) {
  reversedString += chars[i];
}

console.log(reversedString);
