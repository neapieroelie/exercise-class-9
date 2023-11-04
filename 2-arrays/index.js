/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 * Create an array with the different snack types chocolate and candy
 * and initialise it to the variable snacks
 * 
 * Create a second array with the different drink types tea and coffee
 * and initialise it to the variable drink
 * 
 * Initialise the variable called consuming to concat the arrays snacks and drinks
 * Then console log out the consuming. Write a single line comment as to what will be displayed.
 */

var snacks = ["chocolate", "candy"]
var drinks = ["tea", "coffee"]

var consuming = snacks.concat(drinks);

console.log(consuming); //[ 'chocolate', 'candy', 'tea', 'coffee' ]

/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 * initialise the variable `groceries` to a 2-Dimensional array containing the values below
 * 
 *          column [0]      column [1]
 * Row 1    Apples          4
 * Row 2    Oranges         3
 * Row 3    Rice            1
 * 
 * then use console.table() to showcase the information in a table. 
 * 
 * Then based on the values stored in the schedule 2D array, console log out the following sentence (use backticks):
 * I need to buy _3_ _Oranges_ and _1_ pack of _rice_
 */

var groceries = [
    ["Apples", "F4"],
    ["Oranges", "3"],
    ["Rice", "1"]
]

console.table(groceries);

var groceries = `I need to buy ${groceries[1][1]} ${groceries[1][0]} and ${groceries[2][1]} pack of ${groceries[2][0]}`;

console.log(groceries);
