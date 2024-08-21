const express = require("express");
const router = express.Router();
const { Test, Candidate, TestResult } = require("../models/mdata"); // import models

// Middleware for authentication (if required)
// Add your authentication middleware here
// /submitTest /testResult/:resultId' ,/candidateTests/:candidateId,/submitFeedback,/tests

exports.submittest = async (req, res) => {
  try {
    const { candidateId, testId, answers } = req.body;

    // Find the test for user
    const test = await Test.findOne({ testId });
    if (!test) {
      return res.status(404).json({
        msg: false,
        message: "Test not found",
      });
    }

    let score = 0;

    // Calculate score
    answers.forEach((answer) => {
      const question = test.questions.find(
        (q) => q.questionId === answer.questionId
      );
      if (question && question.correctAnswer === answer.selectedOption) {
        score += 1;
      }
    });

    // Save the test result
    const resultId = new mongoose.Types.ObjectId().toString();
    const testResult = new TestResult({
      resultId,
      testId,
      candidateId,
      score,
      answers,
    });

    await testResult.save();

    // Update the candidate's test history
    await Candidate.updateOne(
      { candidateId },
      {
        $push: {
          testsTaken: {
            testId: test._id,
            resultId: resultId,
            score: score,
          },
        },
      },
      { upsert: true }
    );

    res.status(200).json({
      status: true,
      message: "Test submitted successfully",
      score,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};
//{
//   "question": "What is the capital of France?",
//   "options": ["Paris", "London", "Berlin", "Madrid"],
//   "correctAnswer": "Paris"
// } acc to this question schema

exports.submittest1 = async (req, res) => {
  try {
    const { candidateId, testId, answers } = req.body;

    // Find the test for the user
    const test = await Test.findOne({ testId });
    if (!test) {
      return res.status(404).json({
        msg: false,
        message: "Test not found",
      });
    }

    let score = 0;

    // Calculate score
    answers.forEach((answer) => {
      const question = test.questions.find(
        (q) => q.question === answer.question
      );
      if (question && question.correctAnswer === answer.selectedOption) {
        score += 1;
      }
    });

    // Save the test result
    const resultId = new mongoose.Types.ObjectId().toString();
    const testResult = new TestResult({
      resultId,
      testId,
      candidateId,
      score,
      answers,
    });

    await testResult.save();

    // Update the candidate's test history
    await Candidate.updateOne(
      { candidateId },
      {
        $push: {
          testsTaken: {
            testId: test._id,
            resultId: resultId,
            score: score,
          },
        },
      },
      { upsert: true }
    );

    res.status(200).json({
      status: true,
      message: "Test submitted successfully",
      score,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};
// example request body
// {
//   "candidateId": "candidate123",
//   "testId": "test123",
//   "answers": [
//     {
//       "question": "What is the capital of France?",
//       "selectedOption": "Paris"
//     },
//     {
//       "question": "What is the capital of Germany?",
//       "selectedOption": "Berlin"
//     }
//   ]
// }




// 2. Get Test Result
// This endpoint retrieves the test result for a candidate.

exports.testResult = async (req, res) => {
  try {
    const { resultId } = req.params;

    const testResult = await TestResult.findOne({ resultId });

    if (!testResult) {
      return res.status(404).json({
        status: false,
        message: "Result not found",
      });
    }

    res.status(200).json(testResult);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};


//   List Candidate's Tests
//   This endpoint lists all the tests a candidate has taken along with their scores.

exports.candidateTests = async (req, res) => {
  try {
    const { candidateId } = req.params;

    const candidate = await Candidate.findOne({ candidateId }).populate(
      "testsTaken.testId"
    );

    if (!candidate) {
      return res.status(404).json({
        status: false,
        message: "Candidate not found",
      });
    }

    res.status(200).json(candidate.testsTaken);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

//   Submit Feedback for a Test
// This endpoint allows candidates to submit feedback for a test after completing it.

exports.submitFeedback = async (req, res) => {
  
  try {
    const { resultId, feedback } = req.body;

    const testResult = await TestResult.findOneAndUpdate(
      { resultId },
      { feedback },
      { new: true }
    );

    if (!testResult) {
      return res.status(404).json({
        status: false,
        message: "Result not found",
      });
    }

    res
      .status(200)
      .json({ message: "Feedback submitted successfully", testResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};


//   Get All Tests
// This endpoint retrieves all tests for display (e.g., for an admin or candidate to select).

exports.tests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.status(200).json(tests);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};
