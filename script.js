
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

var passwordLength;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()";

function createPassword() {
  passwordLength = parseInt(prompt("Please enter a length password between 8 and 128 characters"));
  lowerCase = confirm("Do you want lower cases on your password?");
  upperCases = confirm("Do you want upper cases on your password?");
  numbers = confirm("Do you want number on your password?");
  specialCharacters = confirm("Do you want special characters on your password?");
  password = '';
}

