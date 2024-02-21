const prompt = require("prompt-sync")();

// 1. Variables and Conditionals:

// 1.1 Create a variable to store your age. Write a conditional statement to check if you are old enough to vote (age >= 18), and log a message accordingly.
let age = prompt("Hey whats ur age?");

if (age >= 18) {
  console.log("You are old enough to vote.");
} else {
  console.log("You are not old enough to vote.");
}
console.log("---------------------------------------");

// 1.2 Write a program that prompts the user for their name. If the name is "John," log "Hello, John!" to the console; otherwise, log "You are not John."
let userName = prompt("Please enter your name:");

if (userName.toLowerCase === "john") {
  console.log("Hello, John!");
} else {
  console.log("You are not John.");
}
console.log("---------------------------------------");

// 2. Functions:

// 2.1 Write a function that takes two numbers as parameters and returns their sum. Call the function with different numbers to test it.

function sumNumbers(num1, num2) {
  return num1 + num2;
}

// Testing the function with an example
console.log("The sum of 5 & 10 is:", sumNumbers(5, 10));
console.log("The sum of -3 & 7 is:", sumNumbers(-3, 7));
console.log("The sum of 0 & 0 is:", sumNumbers(0, 0));
console.log("---------------------------------------");

// 2.2 Create a function that accepts a string as a parameter and returns the string reversed. For example, "hello" should become "olleh."

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Testing the function with an example
let reversedString1 = reverseString("Sruthy");
let reversedString2 = reverseString("hello");
console.log("The reversed string of Sruthy is: ", reversedString1);
console.log("The reversed string of hello is:", reversedString2);
console.log("---------------------------------------");

// 3. Arrays and Loops:

// 3.1 Create an array of your favorite fruits. Use a `for` loop to log each fruit to the console.

let favoriteFruits = ["apple", "banana", "orange", "strawberry", "kiwi"];
for (let i = 0; i < favoriteFruits.length; i++) {
  console.log("The fruit  is: ", favoriteFruits[i]);
}
console.log("---------------------------------------");

// 3.2 Write a function that takes an array of numbers as a parameter and returns the average of those numbers.

function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// Test the function with an array of numbers
let average = calculateAverage([10, 20, 30, 40, 50]);
console.log("Average of 10, 20, 30, 40, 50 is:", average);
console.log("---------------------------------------");

// 3.3 Given an array of numbers, use a loop to find and log the largest number in the array.

function findLargestNumber(numbers) {
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

// Test the function with an array of numbers
let numbers = [25, 10, 45, 30, 60, 5];
let largestNumber = findLargestNumber(numbers);
console.log("The largest number is:", largestNumber);
console.log("---------------------------------------");

// 3.4 Create an array of words. Use a `for` loop to construct a sentence by concatenating these words and log it to the console.

let words = ["Hello", "I", "Am", "Sruthy"];
let sentence = "";

for (let i = 0; i < words.length; i++) {
  sentence += words[i] + " ";
}

// Test the function with an array of numbers
console.log("The sentence formed concatenating is:", sentence.trim());
console.log("---------------------------------------");

// 3.5  Write a function that takes an array of names and a name as a parameter. The function should check if the given name exists in the array and return true or false.

function checkNameExists(namesArray, nameToCheck) {
  return namesArray.includes(nameToCheck);
}

// Test the function with an array of names
let names = ["Sruthy", "Susan", "Libu", "Mathew"];
let nameToFind = "Libu";
console.log(
  "Is Libu exists in the array ?:",
  checkNameExists(names, nameToFind)
);

nameToFind = "Trump";
console.log(
  "Is Trump exists in the array ?:",
  checkNameExists(names, nameToFind)
);
console.log("---------------------------------------");

// 3.6 Create an array of even numbers from 1 to 20 using a `for` loop and the `if` statement. Log the resulting array to the console.

let evenNumbers = [];

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

console.log(evenNumbers);
console.log("---------------------------------------");

// 4. Objects

// 4.1 Create an object representing a book with properties like title, author, and year. Print the book's details to the console.

let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

// Print the object properties
console.log("Book Title: " + book.title);
console.log("Author: " + book.author);
console.log("Year: " + book.year);
console.log("---------------------------------------");

// 4.2 Define an object to represent a person with properties like name, age, and gender. Create a function that takes a person's object as a parameter and prints a message with their information.

let person = {
  name: "Sruthy",
  age: 35,
  gender: "Female",
};

function printPersonInfo(personObj) {
  console.log(`Name: ${personObj.name}`);
  console.log(`Age: ${personObj.age}`);
  console.log(`Gender: ${personObj.gender}`);
  console.log("---------------------------------------");
}

// Call the function with the person object
printPersonInfo(person);

// 5. Objects as Classes

// 5.1 Create an object that simulates a class representing a car with properties like make, model, and year. Add a method to start the car.
// 5.2  Extend the previous car class object with a method to drive the car. Print a message when you start and drive the car instance.

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  started: false,
  start: function() {
      if (this.started) {
          console.log("The car is already running.");
      } else {
          this.started = true;
          console.log("Starting the car...");
          console.log("The car is now running.");
      }
  },
  drive: function() {
      if (this.started) {
          console.log("Driving the car. Vroom Vroom!");
      } else {
          console.log("Please start the car before driving.");
      }
  }
};

// Accessing the car properties
console.log(`Car Make: ${car.make}`);
console.log(`Car Model: ${car.model}`);
console.log(`Car Year: ${car.year}`);

// Starting and driving the car
car.start();
car.drive();
console.log("---------------------------------------");