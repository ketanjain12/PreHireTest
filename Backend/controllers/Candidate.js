const {Candidate} = require('../models/mdata');
const {Test} = require('../models/mdata');
const {TestResult} = require('../models/mdata');


// exports.registerCandidate = async (req, res) => {
//     try {
//         const { name, email, testIds } = req.body;
//         console.log("name is ",name,"email is ",email,"testids is ",testIds);

//         
//checking candidates according to email if candiate is resestered then navigate to test page
//         let candidate = await Candidate.findOne({ email });
//         console.log("candidate is ",candidate);

//         if (candidate) {
//             return res.status(400).json({ 
//                 status: false,
//                  msg: "Candidate already exists" ,
//                  data:candidate
//                 });
//         }

//      // yaha per test data fetch karge
//         const tests = await Test.find({ _id: { $in: testIds } });
//     console.log("tests data is = ",tests)
//         // Create new candidate and assign tests
//         candidate = new Candidate({
//             name,
//             email,
//             testsTaken: tests.map(test => ({
//                 testId: test._id,
//                 score: null,
//                 completed: false
//             }))
//         });

//         await candidate.save();

//         res.status(201).json({ 
//             status: true, 
//             msg: "Candidate registered successfully",
//              data: candidate });
//     } catch (error) {
//         res.status(500).json({ 
//             status: false, 
//             msg: "Server error: " + error.message });
//     }
// };


exports.registerCandidate = async (req, res) => {
    try {
        const { name, email, testIds } = req.body;
        console.log("name is ",name,"email is ",email,"testids is ",testIds);

        //yaha check karennge kki candidate h kya nhi h emaial ke according 
        let candidate = await Candidate.findOne({ email });
        console.log("candidate is ",candidate);

        if (candidate) { 
            return res.status(400).json({        
                status: false,
                 msg: "Candidate already exists" ,
                 data:candidate
                });
        }

     // yaha per test data fetch karge
        const tests = await Test.find({ _id: { $in: testIds } });
    console.log("tests data is = ",tests)
        // Create new candidate and assign tests
        candidate = new Candidate({
            name,
            email,
            testsTaken: tests.map(test => ({
                testId: test._id,
                score: null,
                completed: false
            }))
        });

        await candidate.save();

        res.status(201).json({ 
            status: true, 
            msg: "Candidate registered successfully",
             data: candidate });
    } catch (error) {
        res.status(500).json({ 
            status: false, 
            msg: "Server error: " + error.message });
    }
};

const mongoose = require('mongoose');

// exports.trackProgress = async (req, res) => {
//     try {
//         const { candidateId } = req.params;
//         console.log("candidate id is :",candidateId)
//         // Validate candidateId
//         if (!mongoose.Types.ObjectId.isValid(candidateId)) {
//             return res.status(400).json({ status: false, msg: "Invalid candidateId" });
//         }

//         // Fetch candidate data with test information
//         const candidate = await Candidate.findById(candidateId).populate('testsTaken.testId');
//         console.log("candidate is :",candidate)
//         if (!candidate) {
//             return res.status(404).json({ status: false, msg: "Candidate not found" });
//         }

//         // Fetch progress details
//         const progress = await Promise.all(candidate.testsTaken.map(async (test) => {
//             const result = await TestResult.findOne({ testId: test.testId, candidateId: candidate._id });
//             return {
//                 test: test.testId.title,
//                 score: result ? result.score : null,
//                 completed: !!result,
//                 feedback: result ? result.feedback : null
//             };
//         }));

//         res.status(200).json({ status: true, msg: "Successfully retrieved candidate progress", data: progress });
//     } catch (error) {
//         res.status(500).json({ status: false, msg: "Server error: " + error.message });
//     }
// };

exports.trackProgress = async (req, res) => {
    try {
        const candidateId = req.params.candidateId.trim();

        // Validate candidateId
        
        if (!mongoose.Types.ObjectId.isValid(candidateId)) {

            console.error(`Invalid candidateId: ${candidateId}`);

            return res.status(400).json({
                 status: false,
                  msg: "Invalid candidateId"
                 });
        }

        // Fetch candidate data with test information
        console.log(`Fetching candidate with ID: ${candidateId}`);

        const candidate = await Candidate.findOne({candidateId:candidateId}).populate('testsTaken.testId');
        console.log('Candidate query result:', candidate);

        if (!candidate) {
            console.error(`Candidate with ID ${candidateId} not found`);

            return res.status(404).json({ 
                status: false, 
                msg: "Candidate not found" 
            });
        }

        // Fetch progress details
        const progress = await Promise.all(candidate.testsTaken.map(async (test) => {
            const result = await TestResult.findOne({ testId: test.testId, candidateId: candidate._id });
            return {
                test: test.testId.title,
                score: result ? result.score : null,
                completed: !!result,
                feedback: result ? result.feedback : null
            };
        }));

        console.log("progress is", progress);

        res.status(200).json({ 
            status: true,
             msg: "Successfully retrieved candidate progress", 
             data: progress 
            });
            } catch (error) {

        console.error(`Error fetching candidate progress: ${error.message}`);

        res.status(500).json({
             status: false, 
             msg: "Server error: " + error.message
             });
    }
};


