var generateBtn = document.querySelector("#generate");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '[', '{', ']', '}', '|', ',', '.', '<', '>', '/', '?'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function createPassword() {
  length = parseInt(
    prompt("Please enter the length that you want for your password\nChoose between 8 and 128 characters:")
  );

  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return createPassword();
  }

  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128:")
    return createPassword();
  }

  hasSpecialCharacters = confirm(
    "Click OK if you want special characters in your password?"
  );

  hasNumbers = confirm(
    "Click OK if you want numbers in your password?"
  );

  hasUpperCaseLetters = confirm(
    "Click OK if you want upper cases in your password?"
  );

  hasLowerCaseLetters = confirm(
    "Click OK if you want lower cases in your password?"
  );

  if (
    hasSpecialCharacters === false &&
    hasNumbers === false &&
    hasUpperCaseLetters === false &&
    hasLowerCaseLetters === false
  ) {
    alert("You must select at least one character type");
    return createPassword();
  }
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumbers: hasNumbers,
    hasLowerCaseLetters: hasLowerCaseLetters,
    hasUpperCaseLetters: hasUpperCaseLetters
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
}

function generatePassword() {
  var options = createPassword();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (options.hasLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowercaseLetters);
    guaranteedCharacters.push(getRandom(lowercaseLetters));
  }

  if (options.hasUpperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(uppercaseLetters);
    guaranteedCharacters.push(getRandom(uppercaseLetters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);






