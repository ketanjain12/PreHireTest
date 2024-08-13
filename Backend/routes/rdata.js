const express = require('express');
const router = express.Router();
const validateUser=require('../helper/validation')
const {signup,login}=require('../controllers/c.data')
const{createtests,readtests,gettestsById,updatetestsById,deletetestsById,getalltestsByIddetails,specifictestsById
}=require('../controllers/testmanagement')
const{registerCandidate,trackProgress}=require('../controllers/Candidate')
const{}=require('../controllers/testtaking')
const{results,candidateId,testId,resultId}=require('../controllers/ResultsManagement')

// api route
// router.post("/localFileUpload" ,validateUser, localFileUpload);  // validateUser new fucntion 
// router.post("/imageUpload" , imageUpload); // for single image upload 
// router.post("/imageUpload1" ,validateUser, imageUpload1); // for multiple image upload 
// router.post("/videoUpload" , videoUpload);
// router.post("/imageReducerUpload" ,validateUser, imageReducerUpload);
router.post("/signup" , signup);
router.post("/login" , login);
router.post("/createtests",createtests)
router.post("/readtests",readtests) 
router.post("/gettestsById/:Id", gettestsById);
router.post("/registerCandidate",registerCandidate) ;
router.post("/trackProgress/:candidateId",trackProgress) ;
router.post("/results",results) ;
router.post("/results/candidate/:candidateId",candidateId) ; 
router.post("/results/test/:testId",testId) ;
router.post("/results/:resultId",resultId) ;


module.exports=router;  // exports router