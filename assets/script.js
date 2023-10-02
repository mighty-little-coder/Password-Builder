// Assignment code here

// All that is necessary is create function and return value from it. Then get input from user and create string.
// Maybe include a "copy to clipboard" feature


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function generatePassword() {
//   return //generated password.
// }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charLength = window.prompt("How many characters would you like your password to contain? (Min. characters of 8. Max characters of 128.)");

var charSpecial = window.confirm("Click OK to confirm including special characters.")

var charNumeric = window.confirm("Click OK to confirm including numeric characters.")

var charCaselow = window.confirm("Click OK to confirm including lowercase characters.")

var charCasehigh = window.confirm("Click OK to confirm including uppercase characters.")



// 8-128 characters
// Lower / Upper case letters
// Numeric / Alphabetic
// Special Characters / Typical Characters

// How many Characters would you like your password to contain?
// Click OK to confirm including special characters.
// Click OK to confirm including numeric characters.
// Click OK to confirm including lowercase characters.
// Click OK to confirm including uppercase characters.






// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Mock-Up
