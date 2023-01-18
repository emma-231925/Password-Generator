// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//define variables to store user inputs
let passwordLength;
let wantUpperCase;
let wantLowerCase;
let wantNumerics;
let wantSpecialCharacters;

//define empty array which will contain characters based on user inputs
let chooseCharacters = [];

//define empty string for random characters to be added to
let passwordFinal = "";

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt("Choose a password length between 10 and 64 characters.");
  //conditions for password to be between 10 and 64 characters
  while (passwordLength < 10 || passwordLength > 64) {
    alert("Please chose a number between 10 and 64.");
    passwordLength = prompt("Choose a password length between 10 and 64 characters.");
  } 
  wantUpperCase = confirm("Do you want uppercase characters?");
  wantLowerCase = confirm("Do you want lowercase characters?");
  wantNumerics = confirm("Do you want numerical characters?");
  wantSpecialCharacters = confirm("Do you want special characters?");
  //if no options are chosen, ask again until at least one is true
  while (wantUpperCase === false && wantLowerCase === false && wantNumerics === false && wantSpecialCharacters === false){
    alert("Please chose at least one type of character for your password");
    wantUpperCase = confirm("Do you want uppercase characters?");
    wantLowerCase = confirm("Do you want lowercase characters?");
    wantNumerics = confirm("Do you want numerical characters?");
    wantSpecialCharacters = confirm("Do you want special characters?");
  }
}

getPasswordOptions();

//function creates an array of characters based on user inputs
function makeCharacterArray() {
  if (wantUpperCase === true) {
    chooseCharacters = chooseCharacters.concat(upperCasedCharacters);
  }
  if (wantLowerCase === true) {
    chooseCharacters = chooseCharacters.concat(lowerCasedCharacters);
  }
  if (wantNumerics === true) {
    chooseCharacters = chooseCharacters.concat(numericCharacters);
  }
  if (wantSpecialCharacters === true) {
    chooseCharacters = chooseCharacters.concat(specialCharacters);
  }
  return chooseCharacters;
}

makeCharacterArray();

// Function for getting a random element from an array
function getRandom(arr) {
  for (let i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chooseCharacters.length); //chooses a random number between zero and length of chooseCharacters array
    passwordFinal += chooseCharacters[randomNumber]; //adds random element of chooseCharacters to passwordFinal (empty string)
  }
  return passwordFinal;
}

getRandom();

// Function to generate password with user input
// This generates the password and displays it when button clicked
function generatePassword() {
  return passwordFinal;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);