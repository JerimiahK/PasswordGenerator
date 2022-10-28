//special chars array
const specialChars = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
//numeric chars array
const numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//lower case chars array
const lowerCasedChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCasedChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var generateBtn = document.querySelector("#generate");

function passwordOptions() {
  var passLength = window.prompt(
    "Choose a password length between 8 and 64 characters."
  );

  if (passLength > 64 && passLength < 8) {
    alert("Please choose a number between 8 and 64!");
  }

  var lowerCase = window.confirm(
    "Would you like to use lower case letters in your password?"
  );

  var upperCase = window.confirm(
    "Would you like to use upper case letters in your password?"
  );

  var numbers = window.confirm(
    "Would you like to use numbers in your password?"
  );

  var specials = window.confirm(
    "Would you like to use special characters letters in your password?"
  );

  let options = {
    lowerCase,
    upperCase,
    numbers,
    specials,
    passLength,
  };
  return options;
}
function generatePassword() {
  const pwdOptions = passwordOptions();
  console.log(pwdOptions);

  let concats = [];
  let finalPassword = [];
  let temp = [];
  if (pwdOptions.upperCase) {
    concats = concats.concat(upperCasedChars);
    temp.push(pickRandom(upperCasedChars));
  }
  if (pwdOptions.lowerCase) {
    concats = concats.concat(lowerCasedChars);
    temp.push(pickRandom(lowerCasedChars));
  }
  if (pwdOptions.numbers) {
    concats = concats.concat(numericChars);
    temp.push(pickRandom(numericChars));
  }
  if (pwdOptions.specials) {
    concats = concats.concat(specialChars);
    temp.push(pickRandom(specialChars));
  }
  console.log(concats);
  for (let i = 0; i <= pwdOptions.passLength; i++) {
    finalPassword.push(pickRandom(concats));
  }
  console.log(finalPassword);
  for (let i = 0; i < temp.length; i++) {
    finalPassword[i] = temp[i];
  }
  console.log(temp);
  console.log(finalPassword);
  return finalPassword.join("");
}
function pickRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
