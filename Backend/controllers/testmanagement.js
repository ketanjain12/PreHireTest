// // const { Test } = require('../models/mdata');
// // // crud operations for admin
// // exports.createTest=async(req,res)=>{
// // try{
// // const {testID}=req.body
// // const response = ;
// // }catch(error){

// // }
// // }
// // exports.readTest=async(req,res)=>{
// //   try{

// // }catch(error){
    
// // }  
// // }
// // exports.updateTest=async(req,res)=>{
// //     try{

// //     }catch(error){
        
// //     }
// // }
// // exports.deleteTest=async(req,res)=>{
// //     try{

// //     }catch(error){
        
// //     } 
// // }

// const express = require('express');
// const { Test } = require('./models'); // Assuming the schema is in 'models.js'

// /**
//  router.post('/tests', async (req, res) => {
//     router.get('/tests', async (req, res) => {
//         router.get('/tests/:testId', async (req, res) => {
//             router.put('/tests/:testId', async (req, res) => {
//                 router.delete('/tests/:testId', async (req, res) => {
//                     router.get('/tests/:testId/questions', async (req, res) => {

//  */
// // Create a new test

//     exports.createtests =async (req, res) => {
//     try {
//         const test = new Test(req.body);
//         await test.save();
//         res.status(201).json({
//             status: true,
//             msg: "Successfully created user tests",
//             data: test
//         });
//     } catch (error) {
//             console.error(" Error:", error);
//             return res.status(500).json({
//                 status: false,
//                 msg: "Internal server error: " + error.message
//             });
//         }
// };
// // return res.status(400).json({
// //     status: false,
// //     msg: "Please fill in all details carefully"
// // });
// // return res.status(201).json({
// //     status: true,
// //     msg: "Successfully created user entry",
// //     data: newUser,
// //     token
// // });
// // catch (error) {
// //     console.error("Signup Error:", error);
// //     return res.status(500).json({
// //         status: false,
// //         msg: "Internal server error: " + error.message
// //     });
// // }
// // Get all tests

//     exports.readtests =async (req, res) => {
//     try {
//         const tests = await Test.find();
//         res.status(200).json({
//                 status: true,
//                 msg: "Successfully created user entry",
//                 data: tests
                
//             });
//     }  catch (error) {
//             console.error(" Error:", error);
//             return res.status(500).json({
//                 status: false,
//                 msg: "Internal server error: " + error.message
//             });
//         }
// };

// // Get a specific test by ID

//     exports.gettestsById =async (req, res) => {
//     try {
//         const test = await Test.findOne({ testId: req.params.testId });
//         if (!test) {
//             return res.status(404).json({
//                  error: 'Test not found',
//                 status:false
//                  });
//         }
//         res.status(200).json({
//             status: true,
//             msg: "Successfully get the data by id",
//             data: test
            
//         });
//     } catch (error) {
//         res.status(400).json({ 
//             status:false,
//             error: "error is "+error.message });
//     }
// };

// // Update a test by ID
//     exports.updatetestsById =async (req, res) => {
//     try {
//         const test = await Test.findOneAndUpdate(
//             { testId: req.params.testId },
//             req.body,
//             { new: true, runValidators: true }
//         );
//         if (!test) {
//             return res.status(404).json({
//                 status:false,
//                  error: 'Test not found'
//                  });
//         }
//         res.status(200).json({
//             status: true,
//             msg: "Successfully update the testdata by id",
//             data: test
            
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({
//            status:false,
//            msg:"error in updating the test data "
//              });
//     }
// };

// // Delete a test by ID
//     exports.deletetestsById =async (req, res) => {
//     try {
//         const test = await Test.findOneAndDelete({ testId: req.params.testId });
//         if (!test) {
//             return res.status(404).json({ 
//                 status:false,
//                 error: 'Test not found'
//              });
//         }
//         res.status(200).json({ 
//             message: 'Test deleted successfully',
//             msg:true
//          });
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({
//             status:false,
//             error: "error is ",error.message });
//     }
// };

// // Get test details along with all questions
//     exports.getalltestsByIddetails =async (req, res) => {
//     try {
//         const test = await Test.findOne({ testId: req.params.testId });
//         if (!test) {
//             return res.status(404).json({ 
//                 status:false,
//                 error: 'Test not found' });
//         }
//         res.status(200).json({
//             testId: test.testId,
//             title: test.title,
//             description: test.description,
//             timeLimit: test.timeLimit,
//             difficulty: test.difficulty,
//             questions: test.questions,
//         });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // Get all questions for a specific test
//     exports.specifictestsById =async (req, res) => {
//     try {
//         const test = await Test.findOne({ testId: req.params.testId });
//         if (!test) {
//             return res.status(404).json({ 
//                 msg:false,
//                 error: 'Test not found' });
//         }
//         res.status(200).json(test.questions);
//     } catch (error) {
//         res.status(400).json({
//             status:false,
//             error: error.message });
//     }
// };


// new data 
const express = require('express');
const { Test } = require('../models/mdata'); // Assuming the schema is in 'models.js'
const mongoose=require('mongoose')
// Create a new test
exports.createtests = async (req, res) => {
    try {
        const test = new Test(req.body);
        await test.save();
        res.status(201).json({
            status: true,
            msg: "Successfully created the test",
            data: test
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            status: false,
            msg: "Internal server error: " + error.message
        });
    }
};

// Get all tests
exports.readtests = async (req, res) => {
    try {
        const tests = await Test.find();

        // Calculate the total number of questions across all tests
        const totalQuestionsCount = tests.reduce((total, test) => {
            return total + (test.questions ? test.questions.length : 0);
        }, 0);

        res.status(200).json({
            status: true,
            msg: "Successfully retrieved all tests",
            data: tests,
            totalQuestionsCount: totalQuestionsCount // Total count of all questions at the bottom
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            status: false,
            msg: "Internal server error: " + error.message
        });
    }
};


// Get a specific test by ID
exports.gettestsById = async (req, res) => {
    const id = req.params.Id.trim();
console.log("ID passed:", id);

    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            status: false,
            msg: 'Invalid ID format'
        });
    }

    try {
        const test = await Test.findOne({ _id: id });

        if (!test) {
            return res.status(404).json({
                status: false,
                msg: 'Test not found'
            });
        }

        res.status(200).json({
            status: true,
            msg: "Successfully retrieved the test by ID",
            data: test
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            status: false,
            msg: "Internal server error: " + error.message
        });
    }
};

// Update a test by ID
exports.updatetestsById = async (req, res) => {
    try {
        const test = await Test.findOneAndUpdate(
            { _id: req.params.testId },
            req.body,
            { new: true, runValidators: true }
        );
        if (!test) {
            return res.status(404).json({
                status: false,
                msg: 'Test not found'
            });
        }
        res.status(200).json({
            status: true,
            msg: "Successfully updated the test",
            data: test
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            status: false,
            msg: "Internal server error: " + error.message
        });
    }
};

// Delete a test by ID
exports.deletetestsById = async (req, res) => {
    try {
        const test = await Test.findOneAndDelete({ _id: req.params.testId });
        if (!test) {
            return res.status(404).json({
                status: false,
                msg: 'Test not found'
            });
        }
        res.status(200).json({
            status: true,
            msg: 'Test deleted successfully'
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            status: false,
            msg: "Internal server error: " + error.message
        });
    }
};

// Get test details along with all questions
exports.getalltestsByIddetails = async (req, res) => {
    try {
        const test = await Test.findOne({ _id: req.params.testId });
        if (!test) {
            return res.status(404).json({
                status: false,
                msg: 'Test not found'
            });
        }
        res.status(200).json({
            status: true,
            msg: "Successfully retrieved test details",
            data: {
                testId: test._id,
                title: test.title,
                description: test.description,
                timeLimit: test.timeLimit,
                difficulty: test.difficulty,
                questions: test.questions
            }
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            status: false,
            msg: "Internal server error: " + error.message
        });
    }
};

// Get all questions for a specific test
exports.specifictestsById = async (req, res) => {
    try {
        const test = await Test.findOne({ _id: req.params.testId });
        if (!test) {
            return res.status(404).json({
                status: false,
                msg: 'Test not found'
            });
        }
        res.status(200).json({
            status: true,
            msg: "Successfully retrieved test questions",
            data: test.questions
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            status: false,
            msg: "Internal server error: " + error.message
        });
    }
};
