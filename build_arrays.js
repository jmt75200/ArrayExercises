/*
 * LEVEL 1 - Standard Arrays
 **/

// Create an empty array.
var alone = [];

// Create an array of the colors of the rainbow.
var colors = ["red", "blue", "purple", "green", "yellow", "orange"];

// Create an array of gems.
var gems = ["diamons", "emeralds", "ruby", "sapphire"];

// Create an array of military ranks.
var military = ["captain", "sargent", "lieutenant", "colnel"];

// Create an array of road signs.
var signs = ["stop", "yeild", "railroad"];

// Create an array containing components of a tree.
var tree = ["roots", "branch", "leaf", "sap"];

// Create an array of prime numbers less than 20.
var primeNumbers = [2,3,5,7,11,13,17,19];

// Create an array of words programmers typically say while programming.
var shitDevSay = ["git", "branch", "console.log", "fail", "node", "wtf"];

// Create an array of elements of the periodic table.
var periodicTable = ["NA", "H", "O", "CA", "K"];

// Create an array representing the coins currently in your pocket.
var coins = ["nickle", "penny", "quarter", "dime"];

// Create an array of items you bring to class daily.
var daily = ["laptop", "mouse", "hydroflask", "wallet", "smile"];

// Create an array of web developer role titles.
var devRoles = ["UI developer", "Javascript developer", "UX Designer", "Backend developer"];

// Create an array of mythical animals.
var mythicalAnimals = ["unicorn", "centaur", "griffins", "dragons" ];

// Create an array of drinks.
var drinks = ["vodka", "wisky", "tequila", "rum"];

// Create an array of emoticons.
var emoticons = [":)", ":{", ";>", "<3"];

// Create an array with the letters of the word 'array'.
var lettersArray = ["A", "r", "r", "a", "y"];



/*
 * LEVEL 2 - Object Arrays
 **/

// Create an array of Objects that represent Famous People.
// Each Object should have a Name, Age, and their Profession as properties
var soFamous = [{
  name : "Chino Moreno",
  age : "42",
  profession : "Lead Singer" 
},
{
  name : "Jennifer Aniston",
  age: "47",
  profession : "Actress"
},
{
  name : "Donald Glover",
  age : "29",
  profession : "Comedian"

}
];


// Create an array of songs you'd like Jon to add to the playlist of music 
// to listen to in class.  Each song should be an object with at least 
// a title and an artist.
var playlist = [{
  artist : "Alice in Chains",
  song : "Nutshell"
},
{
  artist : "Hybrid",
  song : "Blackout"
}
];


// Create an array of functions. Define any functions you want, they can 
// be anything! But make sure the syntax is correct :D

var funcTions = [{
  reverseString : function (){
    var str = "Yeay";
    var myArr = str.split("");

    return myArr.reverse().join("");
  }
},
{
  spliceString : function (){
    var str = "Yeay";
    var newLetter = "y";

    var myArr = str.split("");
    var popLastChar = myArr.pop();
    myArr.unshift(popLastChar);
    myArr.splice(-1, 0, newLetter);

    return myArr.join("");
  }
}

];

// Create an array of Sublime shortcuts.  Each item should have a keystroke 
// combination and a textual description of what the key combination does. 
// You can find Sublime Text Shortcuts by traversing the Sublime Text's GUI
// e.g. File Menu options.

var sublimeShorts = [{
  shortcuts : "ctrl + shft + p",
  shortFor : "Command Pallete"
},
{
  shortcuts : "ctrl + s",
  shortFor : "Save"
},
{
  shortcuts : "ctrl + z",
  shortFor : "undo"
},
{
  shortcuts : "ctrl + f",
  shortFor : "find"
}
];

