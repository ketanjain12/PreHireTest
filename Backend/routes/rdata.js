const express = require('express');
const router = express.Router();
const validateUser=require('../helper/validation')

const {signup,login,updateprofile,resetpassword}=require('../controllers/c.data')

const{createtests,readtests,gettestsById,updatetestsById,deletetestsById,getalltestsByIddetails,specifictestsById
}=require('../controllers/testmanagement')

const{registerCandidate,trackProgress}=require('../controllers/Candidate')

const{submittest,testResult}=require('../controllers/testtaking')

const{results,candidateId,testId,resultId}=require('../controllers/ResultsManagement')


// c. data controller routes here there are 4 router post server
router.post("/signup" , signup);
router.post("/login" , login);
router.post("/updateprofile" , updateprofile);
router.post("/resetpassword" , resetpassword);

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


module.exports=router;  // exports router