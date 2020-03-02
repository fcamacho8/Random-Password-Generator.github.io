
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
var password = "";
var randonmPass = "";


function createPassword() {
  alert("Answer the following to create your password;");
  askLowerCases = confirm("Do you want lower cases on your password?");
  askUpperCases = confirm("Do you want upper cases on your password?");
  askNumbers = confirm("Do you want number on your password?");
  askSpecialCharacters = confirm("Do you want special characters on your password?");
  
  passwordLength = parseInt(prompt("Please enter a length password. Choose between 8 and 128 characters"))
     if (passwordLength < 8 || passwordLength > 128){
    prompt("Invalid number. Please enter a number between 8 and 128.");
    console.log(prompt);
 
    };
 

    if (askLowerCases === true) {
      picksLowerCase();
      console.log("Picked lower cases");
    }
    else if (askLowerCases === false) {
      

    }
  
    if (askUpperCases === true) {
      picksUpperCases();
      console.log("Picked upper cases");
    }

    else if (askUpperCases === false) {
      

    }
  
    if (askNumbers === true) {
      picksNumbers();
      console.log("Picked numbers");
    } 
    else if (askLowerCases === false) {
      

    }
  
    if (askSpecialCharacters === true) {
      picksSpecialCharacters();
      console.log("Picked special characters");
     
    };
    
  randonmPass;
    for (var i = 0; i < passwordLength; i++) {
    randonmPass = randonmPass + password.charAt(Math.floor(Math.random() * Math.floor(password.length - 1)));
    };

    return randonmPass;
}


  var pass = [
  picksLowerCase = function() {
    lowerCase;
    for (var i = 0; i < passwordLength; i++) {
      password = password + lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length - 1)));
    }
  },
  
  
   picksUpperCases = function() {
    upperCases;
    for (var i = 0; i < passwordLength; i++) {
      password = password + upperCases.charAt(Math.floor(Math.random() * Math.floor(upperCases.length - 1)));
    }
  
  },
  
  
  picksNumbers = function() {
    numbers;
    for (var i = 0; i < passwordLength; i++) {
      password = password + numbers.charAt(Math.floor(Math.random() * Math.floor(numbers.length - 1)));
    }
  },
  
  
  picksSpecialCharacters= function() {
    specialCharacters;
    for (var i = 0; i < passwordLength; i++) {
      password = password + specialCharacters.charAt(Math.floor(Math.random() * Math.floor(specialCharacters.length - 1)));
    }
  
  }
  ];

