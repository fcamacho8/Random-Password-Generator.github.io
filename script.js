
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
  lowerCase = confirm("Do you want lower cases on your password?");
  upperCases = confirm("Do you want upper cases on your password?");
  numbers = confirm("Do you want number on your password?");
  specialCharacters = confirm("Do you want special characters on your password?");
    passwordLength = parseInt(prompt("Please enter a length password. Choose between 8 and 128 characters"))
     if (passwordLength < 8 || passwordLength > 128){
    prompt("Invalid number. Please enter a number between 8 and 128.");
  password = '';
  };
 

  if (lowerCase === true) {
    randoLowerCase();
  };

  if (upperCases === true) {
    randomUpperCase();
  };

  if (numbers === true) {
    randomNumbers();
  };

  if (specialCharacters === true) {
    randomSpecialChar();
    return password
  }
  
  
  if (cap == false && low == false && sym == false && num == true) {
    alert("You must choose at least one");
  }
    password += randGen();
  return password;

 
}


