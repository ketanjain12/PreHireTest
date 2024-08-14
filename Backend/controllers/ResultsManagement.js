const express = require('express');
const router = express.Router();
const { TestResult } = require('../models/mdata'); // Assuming you have a Mongoose model

// Store test results and feedback
// router.post('/results', async (req, res) => {
    exports.results = async (req, res) => {
        const { testId, candidateId, score, answers, feedback } = req.body;
        try {
         // result check karna if pahle se sub kiya ho
          const existingResult = await TestResult.findOne({ testId, candidateId });
          console.log('dfghj')
          if (existingResult) {
            return res.status(400).json({
              success: false,
              message: "You have already submitted the test results and feedback for this test.",
            });
          }
      
         // new result create karna 
          const response = new TestResult({ testId, candidateId, score, answers, feedback });
        //   await response.save();
        //  console.log("result is ",result)
          res.status(201).json({
            success: true,
            message: "Your test results and feedback submitted successfully.",
            data:response,
            response: {
                responseId: response._id,
              score: response.score,
              feedback: response.feedback,
            },
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: "error is something like " + error.message,
          });
        }
      };
      
// add this api in aug 14 3;40 

exports.results = async (req, res) => {
    const { testId, candidateId, score, answers, feedback } = req.body;

    try {
        // Check if the test result already exists
        const existingResult = await TestResult.findOne({ testId, candidateId });

        if (existingResult) {
            return res.status(400).json({
                success: false,
                message: "You have already submitted the test results and feedback for this test.",
            });
        }

        // Create a new test result
        const newResult = new TestResult({ testId, candidateId, score, answers, feedback });
        await newResult.save(); // Save the result to the database

        res.status(201).json({
            success: true,
            message: "Your test results and feedback have been submitted successfully.",
            data: {
                responseId: newResult._id,
                score: newResult.score,
                feedback: newResult.feedback,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while processing your request: " + error.message,
        });
    }
};


// Retrieve all test results for a specific candidate
// router.get('/results/candidate/:candidateId', async (req, res) => {
    exports.candidateId = async (req, res) => {
    const { candidateId } = req.params;
    try {
        const results = await TestResult.find({ candidateId });
        res.status(200).json({ 
            success: true,
             results 
            });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

// Retrieve all test results for a specific test
// router.get('/results/test/:testId', async (req, res) => {
    exports.testId = async (req, res) => {
        const { testId } = req.params;
        try {
            const results = await TestResult.find({ testId });
            if (results.length === 0) {
                return res.status(404).json({ 
                    success: false,
                    message: "Result not found for this test id"
                });
            }
            res.status(200).json({ 
                success: true,
                msg: "All data received for this test id ",
                data: results 
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error is something like " + error.message
            });
        }
    };
    

// Retrieve a specific test result by result ID
    // router.get('/results/:resultId', async (req, res) => {
        exports.resultId = async (req, res) => {
    const { resultId } = req.params;
    try {
        const result = await TestResult.findById(resultId);
        if (!result) {
            return res.status(404).json({ 
                success: false,
                 message: "Result not found for this result id  "
                 });
        }
        res.status(200).json({ 
            success: true,
             result 
            });
    } catch (error) {
        res.status(500).json({ 
            success: false,
             message: error.message 
            });
    }
};

// module.exports = router;
