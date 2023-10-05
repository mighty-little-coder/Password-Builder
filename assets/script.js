// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var charLength = window.prompt("How many characters would you like your password to contain? (Min. characters of 8. Max characters of 128.)");

  // To prevent user inputting undesired password length
  if (!charLength)return""
  if (charLength < 8 || charLength > 128) {
    window.alert("Check character length")
    return""
  }

console.log(charLength);



var charSpecial = window.confirm("Click OK to confirm including special characters.")
console.log(charSpecial);

var charNumeric = window.confirm("Click OK to confirm including numeric characters.")
console.log(charNumeric)

var charCaselow = window.confirm("Click OK to confirm including lowercase characters.")
console.log(charCaselow)

var charCasehigh = window.confirm("Click OK to confirm including uppercase characters.")
console.log(charCasehigh)

var charArrayCaselow = "abcdefghijklmnopqrstuvwxyz"

var charArrayCasehigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var numArray = "0123456789"

var charArrayspecial = "!@#$%^&*()"

var chosenVariables = ""

if (charSpecial) {
  chosenVariables = chosenVariables + charArrayspecial
}
if (charNumeric) {
  chosenVariables = chosenVariables + numArray
}
if (charCaselow) {
  chosenVariables = chosenVariables + charArrayCaselow
}
if (charCasehigh) {
  chosenVariables = chosenVariables + charArrayCasehigh
}
console.log(chosenVariables)

var createdPassword = ""

for (let i = 0; i < charLength; i++) {
  createdPassword = createdPassword + chosenVariables[(Math.floor(Math.random()*chosenVariables.length))]
}

  return createdPassword //generated password.
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  function copyFunc() {
  var copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 128); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}