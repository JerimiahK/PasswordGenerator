var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = window.prompt("Choose a password length between 8 and 64 characters.");
  
  if (passLength <= 64 && passLength >= 8) {
    alert("Thanks!");
  }else {
    alert("Please choose a number between 8 and 64!");
  }



}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
