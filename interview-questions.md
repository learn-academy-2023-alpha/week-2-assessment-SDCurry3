# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is an extra set of information that an argument uses to run. for example [.slice(1, 400)] the parameters here are the two numbers, telling .slice which section of the unfortunately long string it's stuck to, to focus on.

Researched answer: Dang, I was WAY off! Semantics never have been my strong suit... Anywho, A parameter is a piece of data that other functions need to do stuff, similar to my top-of-the-head answer but not quite. An argument is the data that you pass to parameters. In researching this answer I found a pretty apt analogy; "picture a vending machine that takes coins, The machine is the function, the parameter is the coin-slot, the arguments would be the coins."

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: Value, Index, Array. Value is the current target of the map function, while the other two let you fine-tune it's scope. Index will have it target one or more specific indexes (shocker!), and Array parameters let it choose what array to function on, if there are multiple. Only Value is necessary.

Researched answer: Seems to be a toss-up as to wether the first parameter is called currentValue (or just value for short), or Element. Aside from that, I believe I got the rest correct.

3. What is the difference between map and filter?

Your answer: Map performs the same action to each separate item in an array, Filter looks at the array and performs it's action on any values that meet it's criteria.

Researched answer: Nothing notable I could find that I missed.

1. What is iteration?

Your answer: repetition, climbing a ladder, an assembly line. Iteration is the act of repeating a task multiple times to achieve a set result. Like a for loop, or the map and filter functions. all of those 'iterate' down an array with the aim of performing a task.

Researched answer: Could also argue that the act of coding itself is iterative. Write code, watch it break, write it again, rinse/repeat until it works.

1. What is the difference between a function and a method?

Your answer: A function is a block of code built to perform a specific task, or 'function'. I think of them like a box with a machine inside of it. They can be any size or shape, and so long as you give them the right input, the box will spit out the correct output.
     A method is a prebuilt function designed to work on a specific type of data. So if a function is a box with a machine inside of it, a method would be
 a tool. You can put the tool inside the box with the machine, and so long as it's the right tool doing the right thing (wouldn't try to drill a hole with a hammer.), then you're all good.

Researched answer: I think my answer still holds up after research? These vocabulary questions can get seriously out there with granular terminology...

6. STRETCH: What is hoisting in JavaScript?

Your answer: Not sure, research time!

Researched answer: Oh, I think we've seen this before. Hoisting is when a function or variable is called before it's declared in the code. like putting [console.log(someVariableIDK)] on the line above [let someVariableIDK = "bingus"]

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
*****Gonna keep these kinda short, it's almost midnight on sunday and I am VERY done being at my computer right now...*****
1. Classes: Classes are a way to define objects and their behavior using a syntax that is similar to class-based object-oriented programming languages like Java or C#. The term Syntactical sugar keeps getting tossed around but I have no clue what that's supposed to mean so I'm guessing it's like saying Quality-of-life.

2. Spread operator: The spread operator in JavaScript is a way to allow something like an array or a string to be expanded. It is denoted by three dots (...) followed by the name of the thing being worked on.

3. React state: Near as I can tell, state refers to an object that represents the internal state of a component.

4. React props: Like temporary baby properties for a react object

5. DOM events: These are what happens when the user interacts with elements on a page in react. clicking buttons, sliding sliders, etc.
*Also how React punishes Javascript for being a bad little piggy. (sorry, couldn't resist. w)* 
