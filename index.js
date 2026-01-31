// Array of characters to choose the password from

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]; 


// Getting both the password fields and storing them in new variables
let password1El = document.querySelector("#password1");
let password2El = document.querySelector("#password2");

// initial state
let generated = false;

let inputLength = document.querySelector("#input-length")

// function to generate the new passwords
function generatePassword() {
    let password1 = "";
    let password2 = "";

    if (!generated && inputLength.value) {
    if((inputLength.value > 7) && (inputLength.value < 16)){
            for (let i = 0; i < inputLength.value; i++) {
                getIndex1 = Math.floor(Math.random() * characters.length);
                getIndex2 = Math.floor(Math.random() * characters.length);
                password1 += characters[getIndex1];
                password2 += characters[getIndex2];
            }

            password1El.textContent = password1;
            password2El.textContent = password2;

        }   
    }
}

//function to clear both the passwords
function clearPassword() {
    password1El.textContent = "";
    password2El.textContent = "";
    inputLength.value = "";

    generated = false;
}

// Adding copy to clipboard functionality to both the passwords

password1El.onclick = function () {
    document.execCommand("copy");
};

password1El.addEventListener("copy", function (event) {
    event.preventDefault();

    if (event.clipboardData) {
        if (password1El.textContent != "Copied!") {
            event.clipboardData.setData("text/plain", password1El.textContent);
            password1El.textContent = "Copied!";
        }
    }
});

password2El.onclick = function () {
    document.execCommand("copy");
};

password2El.addEventListener("copy", function (event) {
    event.preventDefault();

    if (event.clipboardData) {
        if (password2El.textContent != "Copied!") {
            event.clipboardData.setData("text/plain", password2El.textContent);
            password2El.textContent = "Copied!";
        }
    }
});
