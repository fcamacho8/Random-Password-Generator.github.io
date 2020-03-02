
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
  alert("Answer the following");
  askLowerCase = confirm("Do you want lower cases on your password?");
  askUpperCases = confirm("Do you want upper cases on your password?");
  askNumbers = confirm("Do you want number on your password?");
  askSpecialCharacters = confirm("Do you want special characters on your password?");
    askPasswordLength = parseInt(prompt("Please enter a length password. Choose between 8 and 128 characters"))
     if (passwordLength < 8 || passwordLength > 128){
    prompt("Invalid number. Please enter a number between 8 and 128.");
  password = '';
  };
 

  if (askLowerCase === true) {
    password = password + lowerCase
  };

  if (askUpperCases === true) {
    password = password + upperCases
  };

  if (askNumbers === true) {
    password = password + numbers
  };

  if (askSpecialCharacters === true) {
    password = password + specialCharacters
    return password
  }
  
    if (lowerCase === false && upperCases === false && numbers === false && specialCharacters === false) {
    alert("You must choose at least one");
  }
    password += randGen();
  return password;

 
}


