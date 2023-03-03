// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
console.log(cohort.split(""))

// a) Your answer: "Alpha2023"
// b) Verify and explain: ['A', 'l', 'p', 'h', 'a', ' ', '2', '0','2', '3'] 
//I had assumed that "" would take the string and 'separate' it into a series of strings with no spaces inbetween. seems like it turned it into an array of strings containing each character. curiously, if you add a space (cohort.split(" ")) then it behaves more like I assumed it would, creating an array but separating each string with a space. ['Alpha', '2023']

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Undefined, there's no return statement inside the function.
// b) Verify and explain: Nailed it.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: This should work properly, doubling each number in the array separately. ***I'm not doing math, you can't make me!***
// b) Verify and explain: Woo! *checks calculator* It worked! .map performs the same action on each item in an array, not on the array as a whole.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15] This should "filter" the list, returning any number that is not evenly divisible by 0 (aka odd numbers)
// b) Verify and explain: ٩(｡θ ᗨ θ｡)۶ nailed it ٩(｡θ ᗨ θ｡)۶

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: ヾ(*ﾟ∇ﾟ*)ﾉ This is checking for the first item listed in the languages property of the myCodingSkills object.
