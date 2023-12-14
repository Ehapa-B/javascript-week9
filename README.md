#   Question 1.
#   Array methods w3schools

<!-- What is an Array? -->

An array is a list that can hold more than one element usually denoted by square brackets []. e.g [1, 2, 3]

<!-- Different datatypes you can input in an array are: -->
1. strings
2. numbers
3. booleans
4. objects etc.

<!-- Arrays methods -->
There are several array methods namely:
1. Array pop() : This removes the last element from an array e.g 
 const num = [1, 2, 3] ;
 let array = num.pop() ; <!-- this removes 3 from the array -->

2. Array push() : This adds a new element to an array e.g
 const buy = ['a', 'b', 'c'] ;
 let array = buy.push( 'd' ) ; <!-- this adds 'd' to the array -->

3. Array shift() : This removes the first array element and       "shifts" all other elements to a lower index.
 const letter = ['a', 'b', 'c'] ;
 let array = letter.shift( 'a' ) ; <!-- this removes 'a' from the array -->
4. Array unshift(): This adds a new element to an array at the beginning. 
const buy = ['a', 'b', 'c'] ;
 let array = buy.unshift( 'd' ) ; <!-- this adds 'd' to the beginning of the  array -->

5. Array length: This method helps to return the length (size) of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length; <!-- 4 -->

#   Question 2.
#   Functions w3schools

function is a block of code designed to perform a particular task , it must start with "function" then followed by names which can come in form of letters, digits etc, they are used to declare the function, then a bracket which may contain parameters.

it works when a user clicks a button or when it is invoked (called) from JavaScript code and when it automatically self invokes. e.g 

function outside () {
    return `Hello beautiful world.`;
}
console.log(world ());


#   Question 3.
# Summary of Control Flow

Control flows are block of codes that can be executed
if certain conditions are not met, it also gives the user
complete control of how the code is executed

1. If/else statements :This executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. e.g

const color  = 'red';

if (color === 'red') {
  console.log("Yeah!");
} else {
  console.log("Oh no!");
}
2. switch statements : Switch statements are used to run a block of code in response to an expression or variable's value. Its uses keys words such as "switch", "case", "break", "default", to loop through and check if a condition is met otherwise it will go to the next statement until it reaches the end of the expression.

3. loops : Loop statements are used to run a code block several times in response to a certain condition. For loops and while loops are the two primary forms of loops in JavaScript.

a. While loops 
  A while loop has an infinite loop. Until the condition is no longer true, it goes on. It repeats itself infinitely. e.g
  var i =0;

  while(i < 20)
    {
    console.log(i);
    i++;
  }

b. For loops
for statement creates a loop with 3 optional expressions. e.g

let sum = 1;

for (let inc = 0; inc < 10; inc++) {
  console.log(inc);
}



#   Question 4.
#   Functions by mdn
Functions are considered first-class objects due to their ability to be assigned to variables and properties, returned from functions, and passed to other functions. Like any other object, they may also contain methods and properties. Their ability to be called functions sets them apart from other things.

Return value 
This is a statement that gives back the arbitrary value from the function passed. e.g
  return `Hello World!`;

Parameters and Arguments
Parameters are the variables passed inside the  parenthesis() in a function, it can range from one  to any number of the user"s choice. e.g  function paintChecker (types, colors, interiors ).

Arguments are the values passed inside  the function body. they are passed by values and never passed by reference. So when the user reassigns a variable, its value remains constant. e.g
function message ( ) {
  return `Hello World!`
}
message();

#   Question 5.
# JavaScript functions basics

A function declaration can be used to create a function. e.g

function food () {} <!-- food is the declaration -->

Global variables are those that are declared outside of any function.

Any function can access global variables (unless they are obscured by locals).

Because they can be assigned to variables and attributes, returned from functions, and passed to other functions, functions in JavaScript are first-class objects. Like any other object, they can also have attributes and methods. They are unique among objects in that functions can be called upon.