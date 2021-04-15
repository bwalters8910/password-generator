let specialCharacters = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let password = [];
let userLengthChoice = [];

// this array will hold all possible chars to make password
// for example if the user chose lower & uppercase, then upperCaseCharacters & lowerCaseCharacters will be pushed here.
let allPossibleChars = [];

//i need to fill an array of at least one of each thing the user chose
//for ex. if the user chose upper & lower i'd have one of each in this array (4 max = upper,lower,special,number)
let guaranteeChars = [];

//over arching fuciton that's connected to the click event/button
function generatePassword() {

  //function that logs user's password length
  function passwordLengthFunc() {
    let pwLength = window.prompt(
      "How long should your password be? (8 min - 128 max)"
    );

    if (pwLength < 8) {
      window.alert("Your password must be at least 8 characters.");
      pwLength = "";
      pwLength = window.prompt(
        "How long should your password be? (8 min - 128 max)"
      );
      window.alert(`Your password is ${pwLength} characters long.`);
    } else if (pwLength > 128) {
      window.alert("Your password cannot exceed 128 characters.");
      pwLength = "";
      pwLength = window.prompt(
        "How long should your password be? (8 min - 128 max)"
      );
      window.alert(`Your password is ${pwLength} characters long.`);
    } else {
      window.alert(`Your password is ${pwLength} characters long.`);
    }

    let numLength = parseInt(`${pwLength}`, 10);
    console.log(numLength); //logs the user's length
    console.log(typeof numLength); //shows that the length has been coverted to a number
    userLengthChoice.push(pwLength);
  }

  //function that logs users choice for uppercase
  function uppercaseFunc() {
    let uppercase = window.confirm(
      "Do you want your password to contain uppercase?"
    );

    if (uppercase === true) {
      window.alert("You've chosen to include uppercase.");
      let index = Math.floor(Math.random() * upperCaseCharacters.length);
      let randomUpper = upperCaseCharacters[index];
      console.log(randomUpper);
      guaranteeChars.push(randomUpper);
      allPossibleChars.push(upperCaseCharacters);
    } else {
      window.alert("Uppercase will not be included.");
    }
  }

  //function that logs users choice for lowercase
  function lowercaseFunc() {
    let lowercase = window.confirm(
      "Do you want your password to contain lowercase?"
    );

    if (lowercase === true) {
      window.alert("You've chosen to include lowercase.");
      let index = Math.floor(Math.random() * lowerCaseCharacters.length);
      let randomLower = lowerCaseCharacters[index];
      console.log(randomLower);
      guaranteeChars.push(randomLower);
      allPossibleChars.push(lowerCaseCharacters);
    } else {
      window.alert("Lowercase will not be included.");
    }
  }

  //function that logs users choice for special characters
  function specialFunc() {
    let special = window.confirm(
      "Do you want your password to contain special characters?"
    );

    if (special === true) {
      window.alert("You've chosen to include special characters.");
      let index = Math.floor(Math.random() * specialCharacters.length);
      let randomSpecial = specialCharacters[index];
      console.log(randomSpecial);
      guaranteeChars.push(randomSpecial);
      allPossibleChars.push(specialCharacters);
    } else {
      window.alert("Special characters will not be included.");
    }
  }

  //function that logs users choice for numbers
  function numericFunc() {
    let numeric = window.confirm("Do you want your password to contain numbers?");

    if (numeric === true) {
      window.alert("You've chosen to include numbers.");
      let index = Math.floor(Math.random() * numericCharacters.length);
      let randomNumeric = numericCharacters[index];
      console.log(randomNumeric);
      guaranteeChars.push(randomNumeric);
      allPossibleChars.push(numericCharacters);
    } else {
      window.alert("Numbers will not be included.");
    }
  }

  passwordLengthFunc();
  uppercaseFunc();
  lowercaseFunc();
  specialFunc();
  numericFunc();
  //console.log(guaranteeChars);
  //console.log(allPossibleChars);

  // merges my allPossibleChars array into one single array
  let mergedAllPossible = [].concat.apply([], allPossibleChars);
  //console.log(mergedAllPossible);


//loop that pulls random characters from the mergedAllPossible array, using the user's chosen length
  for (let i = guaranteeChars.length; i < userLengthChoice; i++) {
    let index = Math.floor(Math.random() * mergedAllPossible.length);
    let passwordSecondPortion = mergedAllPossible[index];
    password.push(passwordSecondPortion);
  }

  //console.log(password);

  //joins my guranteed characters array with password array, to create the finalized password
  let finalizedPassword = guaranteeChars.concat(password);
  return finalizedPassword.join('');
};

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
