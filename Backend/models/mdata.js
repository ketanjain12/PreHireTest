const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema for user
const UserSchema = new Schema({
  userId: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
 // passwordHash: {
 password:{
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Candidate","User"],
    required: true,
  },
});
const OptionSchema = new Schema({
  optionId: {
      type: String,
      required: true
  },
  text: {
      type: String,
      required: true
  }
});
// Question Schema (used in Test Schema file )
const QuestionSchema = new Schema({
  questionId: {
      type: String,
      required: true
  },
  text: {
      type: String,
      required: true
  },
  options: [OptionSchema], // Embedding OptionSchema
  correctAnswer: {
      type: String,
      required: true
  },
  type: {
      type: String,
      enum: ['MCQ', 'Coding'], // 3 options h                                         
      required: true
  }
});
// Test Schema
const TestSchema = new Schema({
  testId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  questions: [QuestionSchema],
  timeLimit: {
    type: Number
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
});

// Candidate Schema
const CandidateSchema = new Schema({
  candidateId: {
    type: String,
    required: true,
    unique: true,
    default: () => new mongoose.Types.ObjectId().toString() // Auto-generate candidateId
    
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  testsTaken: [
    {
      testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
      resultId: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
    },
  ],
});

// TestResult Schema
const TestResultSchema = new Schema({
  resultId: {
    type: String,
    // required: true,
    unique: true,
  },
  testId: {
    type: String,
    required: true,
  },
  candidateId: {
    type: String,
    required: true,
    unique:true
  },
  score: {
    type: Number,
    required: true,
  },
  answers: [
    {
      questionId: {
        type: String,
        required: true,
      },
      selectedOption: {
        type: String,
        required: true,
      },
    },
  ],
  feedback: { 
    type: String 
},
});

//models import ki liye

const User = mongoose.model("User", UserSchema);
const Test = mongoose.model("Test", TestSchema);
const Candidate = mongoose.model("Candidate", CandidateSchema);
const TestResult = mongoose.model("TestResult", TestResultSchema);

module.exports ={
  User,
  Test,
  Candidate,
  TestResult,
};
