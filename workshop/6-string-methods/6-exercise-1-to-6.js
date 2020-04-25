// -------------------------------------------------------------
// String Methods Exercises
// ----------
// note: need to have covered string methods for these exercises
// -------------------------------------------------------------

// Write to the console, the desired length of each of the following strings.
// When this exercise is complete, it should write all of the answers to the console one after the other.

// Given the following data to answer the questions.
const smartGuy = 'Rick Sanchez';
const rickSaying = 'wubba lubba dub dub';
const grandson = 'Morty Antoine Smith';
const enemies =
  'Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova';
const alternateRicks =
  'Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137';
const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  'summer',
  'bacon',
  'scary',
  'intergalactic',
  'jerry',
  'morty',
  'beth',
  'family',
];

//
//
//
//
// Q1
// How many names does Morty have? (use the `grandson` string)
//
// PLEASE NOTE:
//     this first question is solved for you, as a demonstration
//     of how this works)
//
const mortyNamesArray = grandson.split(' ');
const numberOfNames = mortyNamesArray.length;
console.log(`A1) Morty has ${numberOfNames} names`);

//
//
//
//
// Q2
// Convert the alternateRicks string to an array, so that each name ("Simple
// Rick") is an element in that array. Log that array to the console.

newRicks = alternateRicks.split(", ");
console.log(newRicks);



// Q3
// How many Ricks have been named in alternateRicks?
// HINT: There are multiple ways to solve this one. Maybe try a `for` loop!

console.log(`There are ${newRicks.length} Ricks`);

//different attempt with for loops
for(let i=0; rick < newRicks.length; i++) {
  let count = 0;
  if (newRicks[i].includes("Rick")) {
    count++;
  }
}
console.log(count);

// Q4
// How many characters are there in rickSaying (without spaces)?

newRickSaying = rickSaying.split(" ").join("");
console.log(newRickSaying);

// Q5
// It turns out, Morty doesn't actually have a middle name. The `grandson`
// string is wrong! Console Morty's name without "Antoine".

newGrandson = grandson.replace("Antoine ","");
console.log(newGrandson);

// Q6
// Scary Terry is actually not an enemy. Remove him from the list and console only Rick's true enemies.
trueEnemies = enemies.replace(", Scary Terry", "");
console.log(enemies);
console.log(trueEnemies);

//or
console.log(enemies.split(", ").indexOf("Scary Terry"));
//returns 6th position
enemies_split = enemies.split(", "); // splits list into array
enemies_split.splice(6,1); // removes 6th element, which is scary terry, but returns scarry terry
console.log(enemies_split); //actual list of enemies



// Q7 (STRETCH)
// `secret` is an encrypted message! Let's see if we can figure out what it
// says. To decode the message, you'll need to remove any words that are found
// in the "notCode" array.
//
// For example:
//   IF secret was `bluehired`
//   AND notCode was `['blue', 'red']`
//   THEN the answer would be `hi` (bluehired without blue and red).


// ####################################################################################################
// ######################################## SOLUTION ##################################################
// ####################################################################################################

const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  'summer',
  'bacon',
  'scary',
  'intergalactic',
  'jerry',
  'morty',
  'beth',
  'family',
];


//strings are immutable, need to convert to array
let arr = secret.split(" ");

//first loop through each element in the encrypted array
for (let i=0; i < arr.length; i++) {

  //second loop through each encryption word in each encrypted element
  for (let j=0; j < notCode.length; j++ ) {

    // check if the encryption word can be found in the encrypted element
    if(arr[i].includes(notCode[j])) {

      //replace the encrypted word by a blank, and re-assign it to the element
      arr[i] = arr[i].replace(`${notCode[j]}`,``);
      // console.log(arr[i]);
    }
  }
}

decodedMessage = arr.join(" ")
console.log(decodedMessage);


//some stuff i was working on...

//loop through each item in the array
for (let i=0; i < arr.length; i++) {
  //for each encryped word, check if the code words are included, if they are then remove
  for (let j=0; j < notCode.length; j++ ) {
    if(arr[i].includes(notCode[j])) {
      // console.log("Theres a codeword here!");
      let notCodeIndex;
      let notCodeLength;
      notCodeIndex = arr[i].indexOf(`${notCode[j]}`);
      notCodeLength = notCode[j].length + notCodeIndex;
      console.log(`Found encryption word ${notCode[j]} in ${arr[i]} which starts at ${notCodeIndex} and has length of ${notCodeLength} characters`);
    }
  }
}