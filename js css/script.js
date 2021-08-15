



// Assignment code here
var generatePassword = function () {
    // possiblities in password
    var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'O', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '<', '>', '?', '[', ']', '{', '}', '|', ';', '.', '_'];
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    var charactersIncl = [];
    var passwordLength = 0;
    var generatedPass = '';

    //password length prompts

    passwordlength = parseInt(window.prompt("How many characters do you want in this Password between 8 and 128?"));


    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(window.prompt("You must enter a valid number between 8 and 128. Please type a valid number."));
    };

    //Password characters that are included

    // include lowercase
    var lowercaseIncl = window.confirm("Do you want to include lowercase letters?")
    if (lowercaseIncl) {
        charactersIncl = charactersIncl.concat(lowerCase);
    }
    // include uppercase
    var uppercaseIncl = window.confirm("Do you want to include uppercase letters?")
    if (uppercaseIncl) {
        charactersIncl = charactersIncl.concat(upperCase);
    }
    // include symbols
    var symbolsIncl = window.confirm("Do you want to include symbols?")
    if (symbolsIncl) {
        charactersIncl = charactersIncl.concat(symbols);
    }
    // include numbers 
    var numbersIncl = window.confirm("Do you want to include numbers?")
    if (numbersIncl) {
        charactersIncl = charactersIncl.concat(numbers)
    }

    if (lowercaseIncl || uppercaseIncl || symbolsIncl || numbersIncl) {

        for (var i = 0; i < passwordLength; i++) {

            var selectedCharacters = charactersIncl[Math.floor(Math.random() * charactersIncl.length)];
            generatedPass = generatedPass + selectedCharacters;
        }

        // return the new password
        return generatedPass;
    }
};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* if (passwordLength < 8 || passwordLength > 128) {
   alert("You must enter a valid number between 8 and 128. Please type a valid number.");
   return null;
 }
}*/