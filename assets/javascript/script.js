var finger;
var yesnumb;
var yessymbol;
var Upcase;
var Lowcase;

symbols = ["!", "#", "$", "%", "&", "'", "(", ")",];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
abcs = ["a", "b", "c", "d", 
"e", "f", "g", "h", "i", 
"j", "k", "l", "m", "n", 
"o", "p", "q", "r", "s", 
"t", "u", "v", "w", "x", 
"y", "z"];


var sacrifices;
var toUpper = function (x) {
    return x.toUpperCase();
};

abcs2 = abcs.map(toUpper);
var get = document.querySelector("#generate");
get.addEventListener("click", function () {
    fin = generatePassword();
    document.getElementById("password").placeholder = fin;
});

// Start function to generate password
function generatePassword() {
    
    finger = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!finger) {
        alert("This needs a value");
    } else if (finger < 8 || finger > 128) {
    finger = parseInt(prompt("You must choose between 4 and 20"));
} 

    else {
  yesnumb = confirm("Would you like Numbers? :)");
  yessymbol = confirm("Would you like Symbols? :)");
  Upcase = confirm("Would you like UpperCased characters? :)");
  Lowcase = confirm("Would you like LowerCased characters? :)");
    };

    if (!yessymbol && !yesnumb && !Upcase && !Lowcase) {
  sacrifices = alert("You must choose a criteria!");
}

    else if (yessymbol && yesnumb && Upcase && Lowcase) {
sacrifices = symbols.concat(number, abcs, abcs2);
}

    else if (yessymbol && yesnumb && Upcase) {
sacrifices = symbols.concat(number, abcs2);
}

    else if (yessymbol && yesnumb && Lowcase) {
sacrifices = symbols.concat(number, abcs);
}

    else if (yessymbol && Lowcase && Upcase) {
sacrifices = symbols.concat(abcs, abcs2);
}

    else if (yesnumb && Lowcase && Upcase) {
sacrifices = number.concat(abcs, abcs2);
}

    else if (yessymbol && yesnumb) {
sacrifices = symbols.concat(number);
} 

    else if (yessymbol && Lowcase) {
 sacrifices = symbols.concat(abcs);
} 

    else if (yessymbol && Upcase) {
sacrifices = symbols.concat(abcs2);
}

    else if (Lowcase && yesnumb) {
sacrifices = abcs.concat(number);
} 

    else if (Lowcase && Upcase) {
sacrifices = abcs.concat(abcs2);
} 

    else if (yesnumb && Upcase) {
sacrifices = number.concat(abcs2);
}

    else if (yessymbol) {
sacrifices = symbols;
}

    else if (yesnumb) {
sacrifices = number;
}

    else if (Lowcase) {
sacrifices = abcs;
}

    else if (Upcase) {
sacrifices = brain.concat(abcs2);
};

var password = [];

for (var i = 0; i < finger; i++) {
var pickChoices = sacrifices[Math.floor(Math.random() * sacrifices.length)];
password.push(pickChoices);
}
    
var fin = password.join("");
UserInput(fin);
return fin;
}

function UserInput(fin) {
    document.getElementById("password").textContent = fin;
}
