var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = window.prompt("Choose a password length between 8 and 64 characters.");
  
  if (passLength)



}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
