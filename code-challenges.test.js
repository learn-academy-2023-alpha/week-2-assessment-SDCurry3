// ASSESSMENT 2: Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")




//  ***** Apologies in advance for the gratuitous amount of commenting on my part. It's a big part of how I internalize complex info, and since I work slow in general this exercise took a while. Gotta keep myself entertained somehow! *****





// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// input: an object containing a number
// output: a string stating wether or not the number inside is evenly divisible by three

// Pseudocode: Create a function that will hold an if/else statement that will take an input and check if it is a number that is evenly divisible by 3. If it is, return a string stating that `${whateverTheInputIs} is divisible by three`. if it is a number that is NOT evenly divisible by 3, return a string stating `${whateverTheInputIs} is not divisible by three`. if the input is not a number, return an error message stating such.

describe("cerberus", () => {
    const object1 = { number: 15 }
    const object2 = { number: 0 }
    const object3 = { number: -7 }
    it("checks if a number is evenly divisible by three", () => {
        expect(cerberus(object1.number)).toEqual(`${object1.number} is divisible by three! :D`)
        expect(cerberus(object2.number)).toEqual(`${object2.number} is divisible by three! :D`)
        expect(cerberus(object3.number)).toEqual(`${object3.number} is not divisible by three! >:(`)
    })
});
// [1st error] ReferenceError: divDecider is not defined
// [2nd error]  Expected: "[object Object] is divisible by three!" Received: undefined  /// ----> didn't give the test any values to work with.



// Expected output: "15 is divisible by three"
// Expected output: "0 is divisible by three"
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.


const cerberus = (input) => {     // *****I spent infinitely too long refactoring this question in order to stop it working on boolean values and strings, while still accepting either numbers or objects with the 'number:' property...*****
    let bone;
    if (typeof input === "number") {                                 //***** here we check if the input is a strict number, and if so, put it into a nice little treat for cerberus*****
      bone = input;
    } else if (typeof input === "object" && !isNaN(input.number)) {
      bone = input.number;                                           // *****DOUBLENEGATIVESAREATHINGINCODEDEARGODWHYMYPOORBRAIN (T﹏T) *ahem* sorry. this bit checks if the given input is of type "object" and is not NOT a number, and if both conditions are true, stuffs the not NOT number into our bone value. gonna be real, I lucked into that answer. could also replace the double negative with the much simpler [typeof input.number === "number"], but I COOKED MY NOODLE ON THIS ONE DANGIT SO YOU GET TO SUFFER TOO!!*****
    } else {
      return "*Bark!*bark!*bark!* (What? this isn't a number... try again, please.)";  //***** Doggo(s) mad.*****
    }
    if (bone % 3 === 0) {
      return `${bone} is divisible by three! :D`;
    } else {
      return `${bone} is not divisible by three! >:(`;
    }
  };





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// input: an array of words (strings)
//output: an array of words that have had their first letters capitalized (still strings)
// pseudocode: create a function that will take an array as an input, and using the .map method, capitalize the first letter in each string.

// *****pseudo's kinda vague here because I'm pretty sure that's the proper method, but beyond that I don't really know what to do? I know toUpperCase is a thing, gonna start there. also not gonna modify it if I find a better way, for "thought process" purposes*****


describe("theCapitalizer", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]   //*****...potato teeth...*****
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    it("should capitalize the first letter of each string in the array", () => {
        expect(theCapitalizer(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(theCapitalizer(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// [first error]  ReferenceError: theCapitalizer is not defined // -----> initial run, no code created.
// [second error] Expected: "Streetlamp" Received: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"] ----> the code works, just goofing up the test somehow [5 minutes later: yep, forgot to add [] around the expected output.]

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

const theCapitalizer = (input) => {                  // ***** "Prancing Prose, Batman! It's The Capitalizer! That Dastardly Do-Badder Won't Stop Until He Upcases Every Consonant In Gotham City!"*****
    return input.map((thisTookAnHourToFigureOut) => {                 // ***** Really Don't Know If There Is Another Method To Make This Work, But I Was Committed To Figuring Out The .Map Strat.*****
        const capFirst = thisTookAnHourToFigureOut.charAt(0).toUpperCase()             // ***** This Looks At The First Index (0Th) Of Each String And Applies .ToUpperCase***"Curse You Capitalizer!, Our Methods Won't Function Properly With The First Letter Capitalized!"***To It.*****
        const everythingElse = thisTookAnHourToFigureOut.slice(1).toLowerCase()               // ***** Here We Use .Slice Here To Hold The Rest Of The String That Isn't Being Capitalized. Note That .Slice Only Has One Value Passed To It, So Instead Of Having A Predefined Starting And Ending Point, It Will Work On The Entire Rest Of The String Regardless Of Length. While We're Here We May As Well Protect The Rest Of The String From The Capitalizer's Poisonous Plotting With .ToLowerCase!*****
        return capFirst + everythingElse          // ***** Gluing The Two Bits Together.
    })
}             // ***** Function Complete! Off to Arkham with you, Capitalizer! *****




// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Input: A string (string)
// Output: The index of the first vowel in the string (number)

// Pseudocode: Using a for loop, check each index of a given string for vowels. we can do this by creating a variable holding all vowels,(***Y doesn't exist, shhhh***) and using .includes to compare them against the input. return the index of the first vowel found.

// a) Create a test with expect statements for each of the variables provided.


describe("vowelCheck", () => {
    it("takes in a string and logs the index of the first vowel.", () => {
      expect(vowelCheck(vowelTester1)).toEqual(1)
      expect(vowelCheck(vowelTester2)).toEqual(0)
      expect(vowelCheck(vowelTester3)).toEqual(2)
    })
  })


//  [first error]    expect(received).toEqual(expected) // deep equality    Expected: "1"   Received: 1    // ***** Oops, set toEqual to expect strings. Did a lot of sandboxing once I found the .includes method, so no other errors here. *****

  // b) Create the function that makes the test pass.

  const vowels = ["e", "u", "o", "i", "a"]
const vowelCheck = (input) => {
  for(let i = 0; i < input.length; i++)
    if (vowels.includes(input[i])) {          // *****Not much to add here, did what the pseudo says. compared to the last questions, this one was relatively painless. Guess for loops are easier for me to play with?*****
        return i
    } 
}  

// ***** [.includes] seems super handy, its like Ctrl+F but for function stuff!(cmd+F on mac? whatever the "find on page" shortcut is in apple-speak.) *****

  const vowelTester1 = "learn"
  // Expected output: 1
  const vowelTester2 = "academy"
  // Expected output: 0
  const vowelTester3 = "challenges"
  // Expected output: 2