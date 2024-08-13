const mongoose = require('mongoose');
const { dbconnect } = require('../config/database'); // Adjust the path as necessary
const Test = require('../models/mdata'); // Ensure this is the correct path to your model file

dbconnect();

const testData = {
    testId: "test001",
    title: "Sample Test",
    description: "A sample test for demonstrating question storage.",
    questionData: [
        {
            section: "Aptitude",
            questions: [
                // Easy Questions
                {
                    questionId: "A1",
                    text: "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:?",
                    options: [
                        { optionId: "a", text: "Rs. 45" },
                        { optionId: "b", text: "Rs. 50" },
                        { optionId: "c", text: "Rs. 55" },
                        { optionId: "d", text: "Rs. 60" },
                    ],
                    correctAnswer: "d",
                    explanation: "(C.P. of 17 balls) - (S.P. of 17 balls) = (C.P. of 5 balls) ",
                    "C.P. of 12 balls = S.P. of 17 balls = Rs.720. C.P. of 1 ball = Rs 720/12= Rs. 60.",
                    difficultyLevel: "Easy",
                },
                {
                    questionId: "A2",
                    text: "What is the square root of 9?",
                    options: [
                        { optionId: "a", text: "2" },
                        { optionId: "b", text: "3" },
                        { optionId: "c", text: "4" },
                        { optionId: "d", text: "5" },
                    ],
                    correctAnswer: "b",
                    explanation: "The square root of 9 is 3.",
                    difficultyLevel: "Easy",
                },
                // Add 8  easy questions here
                // medium Questions
                {
                    questionId: "A11",
                    text: "What is 12% of 50?",
                    options: [
                        { optionId: "a", text: "5" },
                        { optionId: "b", text: "6" },
                        { optionId: "c", text: "7" },
                        { optionId: "d", text: "8" },
                    ],
                    correctAnswer: "b",
                    explanation: "12% of 50 is 6.",
                    difficultyLevel: "Medium",
                },
                {
                    questionId: "A12",
                    text: "What is the value of 2^3?",
                    options: [
                        { optionId: "a", text: "6" },
                        { optionId: "b", text: "8" },
                        { optionId: "c", text: "9" },
                        { optionId: "d", text: "10" },
                    ],
                    correctAnswer: "b",
                    explanation: "2 raised to the power of 3 is 8.",
                    difficultyLevel: "Medium",
                },
                // Add 8 more medium questions here
                // Hard Questions
                {
                    questionId: "A21",
                    text: "Solve the equation: 5x - 7 = 18. What is x?",
                    options: [
                        { optionId: "a", text: "5" },
                        { optionId: "b", text: "7" },
                        { optionId: "c", text: "4" },
                        { optionId: "d", text: "6" },
                    ],
                    correctAnswer: "a",
                    explanation: "5x - 7 = 18, therefore x = 5.",
                    difficultyLevel: "Hard",
                },
                {
                    questionId: "A22",
                    text: "What is the derivative of x^2 + 2x?",
                    options: [
                        { optionId: "a", text: "x + 2" },
                        { optionId: "b", text: "2x + 2" },
                        { optionId: "c", text: "2x" },
                        { optionId: "d", text: "x + 1" },
                    ],
                    correctAnswer: "b",
                    explanation: "The derivative of x^2 + 2x is 2x + 2.",
                    difficultyLevel: "Hard",
                },
                // Add 8 more hard questions here
            ],
            timing: 30,
        },
        {
            section: "English",
            questions: [
                // Easy Questions
                {
                    questionId: "E1",
                    text: "Choose the correct synonym for 'Happy'.",
                    options: [
                        { optionId: "a", text: "Sad" },
                        { optionId: "b", text: "Angry" },
                        { optionId: "c", text: "Joyful" },
                        { optionId: "d", text: "Tired" },
                    ],
                    correctAnswer: "c",
                    explanation: "'Joyful' is a synonym for 'Happy'.",
                    difficultyLevel: "Easy",
                },
                {
                    questionId: "E2",
                    text: "Fill in the blank: He is as _______ as a fox.",
                    options: [
                        { optionId: "a", text: "slow" },
                        { optionId: "b", text: "fast" },
                        { optionId: "c", text: "cunning" },
                        { optionId: "d", text: "lazy" },
                    ],
                    correctAnswer: "c",
                    explanation: "The phrase is 'as cunning as a fox'.",
                    difficultyLevel: "Easy",
                },
                {
                    questionId: "E3",
                    text: "The workers are hell bent at getting what is due to them.",
                    options: [
                        { optionId: "a", text: "hell bent on getting" },
                        { optionId: "b", text: "hell bent for getting" },
                        { optionId: "c", text: "hell bent upon getting" },
                        { optionId: "d", text: "No improvement" },
                    ],
                    correctAnswer: "c",
                    explanation: "The phrase is 'as cunning as a fox'.",
                    difficultyLevel: "Easy",
                },
                // Add 8 more easy questions here
                // Medium Questions
                {
                    questionId: "E11",
                    text: "Choose the correct antonym for 'Generous'.",
                    options: [
                        { optionId: "a", text: "Stingy" },
                        { optionId: "b", text: "Kind" },
                        { optionId: "c", text: "Selfless" },
                        { optionId: "d", text: "Caring" },
                    ],
                    correctAnswer: "a",
                    explanation: "'Stingy' is the opposite of 'Generous'.",
                    difficultyLevel: "Medium",
                },
                {
                    questionId: "E12",
                    text: "Identify the correct sentence: 'Their going to the park'.",
                    options: [
                        { optionId: "a", text: "They're going to the park." },
                        { optionId: "b", text: "There going to the park." },
                        { optionId: "c", text: "Their going to the park." },
                        { optionId: "d", text: "Theyre going to the park." },
                    ],
                    correctAnswer: "a",
                    explanation: "'They're' is the contraction for 'they are'.",
                    difficultyLevel: "Medium",
                },
                // Add 8 more medium questions here
                // Hard Questions
                {
                    questionId: "E21",
                    text: "Which of the following is an example of a hyperbole?",
                    options: [
                        { optionId: "a", text: "He ran faster than the wind." },
                        { optionId: "b", text: "She is as busy as a bee." },
                        { optionId: "c", text: "The room was as silent as the grave." },
                        { optionId: "d", text: "I have a ton of homework." },
                    ],
                    correctAnswer: "d",
                    explanation: "'I have a ton of homework' is a hyperbole.",
                    difficultyLevel: "Hard",
                },
                {
                    questionId: "E22",
                    text: "Choose the correct idiom: 'Burning the midnight ______'.",
                    options: [
                        { optionId: "a", text: "oil" },
                        { optionId: "b", text: "lamp" },
                        { optionId: "c", text: "light" },
                        { optionId: "d", text: "fire" },
                    ],
                    correctAnswer: "a",
                    explanation: "The idiom is 'Burning the midnight oil'.",
                    difficultyLevel: "Hard",
                },
                // Add 8 more hard questions here
            ],
            timing: 30,
        },
        {
            section: "Coding",
            questions: [
                {
                    questionId: "C1",
                    text: "Write a function to return the sum of two numbers.",
                    options: [
                        { optionId: "a", text: "function sum(a, b) { return a + b; }" },
                        { optionId: "b", text: "function sum(a, b) { return a - b; }" },
                        { optionId: "c", text: "function sum(a, b) { return a * b; }" },
                        { optionId: "d", text: "function sum(a, b) { return a / b; }" },
                    ],
                    correctAnswer: "a",
                    explanation: "The correct function returns the sum of two numbers.",
                    difficultyLevel: "Easy",
                },
                {
                    questionId: "C2",
                    text: "Write a function to reverse a string.",
                    options: [
                        { optionId: "a", text: "function reverseString(str) { return str.split('').reverse().join(''); }" },
                        { optionId: "b", text: "function reverseString(str) { return str.split('').sort().join(''); }" },
                        { optionId: "c", text: "function reverseString(str) { return str.toUpperCase(); }" },
                        { optionId: "d", text: "function reverseString(str) { return str.toLowerCase(); }" },
                    ],
                    correctAnswer: "a",
                    explanation: "The correct function reverses the string.",
                    difficultyLevel: "Medium",
                },
                // Add 1 more easy, 1 more medium, and 1 more hard coding question here
                // Medium and Hard Coding Questions
                {
                    questionId: "C3",
                    text: "Write a function to find the maximum number in an array.",
                    options: [
                        { optionId: "a", text: "function max(arr) { return Math.max(...arr); }" },
                        { optionId: "b", text: "function max(arr) { return arr.sort()[0]; }" },
                        { optionId: "c", text: "function max(arr) { return arr[0]; }" },
                        { optionId: "d", text: "function max(arr) { return arr.reduce((a, b) => a + b, 0); }" },
                    ],
                    correctAnswer: "a",
                    explanation: "The correct function uses Math.max to find the maximum number.",
                    difficultyLevel: "Hard",
                },
            ],
            timing: 30,
        },
    ],
    timeLimit: 90,
    difficulty: "Medium",
};

async function saveTest() {
    try {
        const test = new Test(testData);
        await test.save();
        console.log('Test data saved successfully!');
    } catch (error) {
        console.error('Error saving test data:', error);
    } finally {
        mongoose.disconnect();
    }
}

saveTest();

// Insert test data
// Test.create(testData)
//     .then((result) => {
//         console.log('Test data inserted:', result);
//         mongoose.connection.close();
//     })
//     .catch((error) => {
//         console.error('Error inserting test data:', error);
//         mongoose.connection.close();
//     });
