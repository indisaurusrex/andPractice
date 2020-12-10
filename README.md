## Coding Challenge 
We have really enjoyed speaking with you so far AND we are excited to invite you to take part in our in house coding exercise to showcase your programming and problem solving skills. 

We recommend you spend 1hour 30mins to 2hour 30mins to complete this challenge, however it is not timed. We are happy for you to take your time and really showcase your coding skills and ability!
## Exercise
Extract the SolutionAND.zip file and import the SolutionAND.js file into your favourite IDE of choice.

Two non-negative integers are called AND-Siblings if they can be obtained by each other by rearranging the digits of their decimal representations.
Write the function:
function solution (input) {
  // logic here
  return null; 
}
that, given any String input, returns all the distinct AND-Siblings that can be formed by the positive integers that can be found on it in descending order. Please keep in mind the efficiency of your algorithm when writing the solution.

For example:

* If the input provided is: “236”, then your solution should return "632,623,362,326,263,236" as these are all the combination that can be made with integers that the string contains
* If the input provided is: “A 3B2 C6D”, then your solution should return "632,623,362,326,263,236" as well, but this time notice that the provided string had non-integers characters and whitespaces, so an extraction of integers was first made to obtain the correct solution
* If the input provided does not contain any integers: “ABC”, then your solution should return the appropriate error exception message.
## Problem Submission 
Submit working code: 
Keep things simple, don’t over-engineer your solution. 
Send us the archived file <firstname.lastname>-L1L2_challenge.zip via email.

Happy coding :)

## Criteria from description

* function needs input to be a string
* find non-negative integers, ignoring other characters/spaces
* AND-Siblings are 2+ numbers
* return a message if there are no integers
* otherwise return string of distinct AND-Siblings in descending order separated by commas

## My answer explained

* The function first checks if it was provided a string, then if the string contains non-negative integers and sets the `integers` variable with them if so. If there are 2 or more integers, the AND-Siblings are found in a recursive manner. The outcome is an array joined with commas, output as a string.
* There are 3 messages to make it clear if you did not get a list of AND-Siblings returned.
* I've tried to keep my function short but still readable.
* I chose variable names and message wording that relate to the instructions provided.
* The if statement on line 17 is structured to do the checks in order of processing required, so the check that needs the most processing will only be done if it is needed. 
* All variables are declared at the top of the function before anything is processed, for ease of reading.
* Tests were written in Jest and are in the file `solution.test.js`
    * To run the tests, run `npm install --save-dev jest` then `npm test`
    * I did this using TDD and refactored from a switch statement to use recursion to make the function work for more than 3 integers. 
    * The tests are structured with exceptions last.
* At first I thought the function should only take distinct non-negative integers into account but after a re-read I don't think that's the case. With that in mind I have written it so that if there are duplicate non-negative integers they are used in the AND-Siblings, but only distinct AND-Siblings are returned. I hope this is correct! 
