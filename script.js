
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
  alert("Please answer the following to generate your password:");
  askLowerCases = confirm("Do you want lower cases in your password?");
  askUpperCases = confirm("Do you want upper cases in your password?");
  askNumbers = confirm("Do you want number in your password?");
  askSpecialCharacters = confirm("Do you want special characters in your password?");
  
  passwordLength = parseInt(prompt("Please enter the length that you want for your password\nChoose between 8 and 128 characters:"))
     if (passwordLength < 8 || passwordLength > 128){
    prompt("Invalid number!\nPlease enter a number between 8 and 128:");
    console.log(prompt);
 
    };
 
    if (askLowerCases === true) {
      picksLowerCase();
      console.log("Picked lower cases");
    }; 
  
    if (askUpperCases === true) {
      picksUpperCases();
      console.log("Picked upper cases");
    };
  
    if (askNumbers === true) {
      picksNumbers();
      console.log("Picked numbers");
    };
  
    if (askSpecialCharacters === true) {
      picksSpecialCharacters();
      console.log("Picked special characters");
     
    };
    
  randonmPass;
    for (var i = 0; i < passwordLength; i++) {
    randonmPass = randonmPass + password.charAt(Math.floor(Math.random() * password.length ));
    };

    return randonmPass;
}


  var pass = [
  picksLowerCase = function() {
    lowerCase;
    for (var i = 0; i < passwordLength; i++) {
      password = password + lowerCase.charAt(Math.floor(Math.random() * lowerCase.length ));
    }
  },
  
  
   picksUpperCases = function() {
    upperCases;
    for (var i = 0; i < passwordLength; i++) {
      password = password + upperCases.charAt(Math.floor(Math.random() * upperCases.length ));
    }
  
  },
  
  
  picksNumbers = function() {
    numbers;
    for (var i = 0; i < passwordLength; i++) {
      password = password + numbers.charAt(Math.floor(Math.random() * numbers.length ));
    }
  },
  
  
  picksSpecialCharacters= function() {
    specialCharacters;
    for (var i = 0; i < passwordLength; i++) {
      password = password + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length ));
    }
  
  }
  ];

