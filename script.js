//your JS code here. If required.
Problem Statement: Transforming Data with Promise Chaining
Objective
In this assignment, you'll be utilizing JavaScript promises to perform a series of data transformations in a chain. Starting with a user-provided number, you will perform a series of mathematical operations: multiply, subtract, divide, and add. You will use promise chaining to handle asynchronous operations, and the transformations will be displayed progressively on the webpage.

Learning Outcomes
By the end of this assignment, you will:

Understand how to create and chain multiple promises in JavaScript.
Learn to handle asynchronous operations and delays using setTimeout.
Use the DOM API to update the page dynamically as promises are resolved.
Requirements
Input and Event Listener
An input element with the id ip and a button with the id btn are already provided in the HTML.
In the JavaScript, you need to:
Add an onclick event listener on the button.
When the button is clicked, the input value should be processed using promises.
Promises and Transformations
Initial Promise (2 seconds):

The first promise resolves after 2 seconds with the number from the input field and displays it in the div with the id output as Result: <number>.
Second Promise (2 seconds):

The second promise resolves after 2 seconds with the number from the previous promise.
Multiply the number by 2 and display it in the div as Result: <number>.
Third Promise (1 second):

The third promise resolves after 1 second with the result of the second promise.
Subtract 3 from the number and display it as Result: <number>.
Fourth Promise (1 second):

The fourth promise resolves after 1 second with the result of the third promise.
Divide the number by 2 and display it as Result: <number>.
Fifth Promise (1 second):

The fifth promise resolves after 1 second with the result of the fourth promise.
Add 10 to the number and display it as Final Result: <number>.
Example Walkthrough
Step 1: User enters the number 5 in the input field and clicks the button.
Step 2: The input is processed with the following transformations:
After 2 seconds: The result is Result: 5.
After 3 seconds: The result becomes Result: 10 (multiplied by 2).
After 4 seconds: The result becomes Result: 7 (subtracted 3).
After 5 seconds: The result becomes Result: 3.5 (divided by 2).
After 6 seconds: The result becomes Final Result: 13.5 (added 10).
HTML Structure
The HTML includes the following elements:

An input element with id ip for entering the number.
A button element with id btn to trigger the transformations.
A div with id output to display the intermediate and final results.
Example Test Case
Test Case 1: Input 5
Before any transformations: The output div is empty.
After 2 seconds: Result: 5
After 3 seconds: Result: 10
After 4 seconds: Result: 7
After 5 seconds: Result: 3.5
After 6 seconds: Final Result: 13.5
Test Case 2: Input 10
Before any transformations: The output div is empty.
After 2 seconds: Result: 10
After 3 seconds: Result: 20
After 4 seconds: Result: 17
After 5 seconds: Result: 8.5
After 6 seconds: Final Result: 18.5
Notes
The promises should be chained using the .then() method.
Use setTimeout() or async/await to handle delays in the promises.
After each operation, the result should be updated in the output div with the corresponding text.