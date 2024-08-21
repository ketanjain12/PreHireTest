const express = require('express');
const router = express.Router();
const validateUser=require('../helper/validation')
const protect = require('../middleware/auth');

const {signup,login,updateprofile,resetpassword,getUserProfile,forgetpassword}=require('../controllers/c.data')

const{createtests,readtests,gettestsById,updatetestsById,deletetestsById,getalltestsByIddetails,specifictestsById
}=require('../controllers/testmanagement')

const{registerCandidate,trackProgress}=require('../controllers/Candidate')

const{submittest,submittest1,testResult}=require('../controllers/testtaking')

const{results,candidateId,testId,resultId}=require('../controllers/ResultsManagement')

// Log the imported functions to check if they are defined(// All should be functions)
console.log(signup, login, updateprofile, resetpassword); 
console.log(createtests, readtests, gettestsById); 
console.log(registerCandidate, trackProgress); 
console.log(submittest, testResult); 
console.log(results, candidateId, testId, resultId); 

// c. data controller routes here there are 4 router post server
router.post("/signup" , signup);
router.post("/login" , login);
router.post("/updateprofile" , updateprofile);
router.post("/resetpassword" , resetpassword);
router.get('/profile', protect, getUserProfile);
router.post("/forgetpassword" , forgetpassword);

//testmanagement js
router.post("/createtests",createtests)
router.post("/readtests",readtests) 
router.post("/gettestsById/:Id", gettestsById);

//candidate js routes
router.post("/registerCandidate",registerCandidate) ;
router.post("/trackProgress/:candidateId",trackProgress) ;

//resultsmanagement js roujtes
router.post("/results",results) ;
router.post("/results/candidate/:candidateId",candidateId) ; 
router.post("/results/test/:testId",testId) ;
router.post("/results/:resultId",resultId) ;

// testtaking controller routes
router.post("/submittest",submittest)
router.post("/testResult",testResult) 
router.post("/submittest1",submittest1)

module.exports=router;  // exports router