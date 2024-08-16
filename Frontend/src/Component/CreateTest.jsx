import React, { useState } from 'react';

const CreateTest = () => {
  const [testId, setTestId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([
    {
      questionId: "",
      text: "",
      options: [
        { optionId: "", text: "" },
        { optionId: "", text: "" },
        { optionId: "", text: "" },
        { optionId: "", text: "" }
      ],
      correctAnswer: "",
      type: "MCQ"
    }
  ]);
  const [timeLimit, setTimeLimit] = useState(0);
  const [difficulty, setDifficulty] = useState("Medium");

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionId: "",
        text: "",
        options: [
          { optionId: "", text: "" },
          { optionId: "", text: "" },
          { optionId: "", text: "" },
          { optionId: "", text: "" }
        ],
        correctAnswer: "",
        type: "MCQ"
      }
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      testId,
      title,
      description,
      questions,
      timeLimit,
      difficulty
    };

    try {
      const response = await fetch('http://localhost:3002/api/v1/createtests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Test created successfully!');
      } else {
        alert(result.msg || 'Failed to create test');
      }
    } catch (error) {
      console.error('Error creating test:', error);
      alert('An error occurred while creating the test');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Create a New Test</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-lg font-medium text-gray-700">Test ID</label>
          <input
            type="text"
            value={testId}
            onChange={(e) => setTestId(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter Test ID"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter Test Title"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter Test Description"
          ></textarea>
        </div>

        {questions.map((question, qIndex) => (
          <div key={qIndex} className="p-4 border border-gray-200 rounded-md">
            <h3 className="font-medium text-lg mb-2">Question {qIndex + 1}</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700">Question ID</label>
              <input
                type="text"
                value={question.questionId}
                onChange={(e) => handleQuestionChange(qIndex, 'questionId', e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                placeholder="Enter Question ID"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Question Text</label>
              <input
                type="text"
                value={question.text}
                onChange={(e) => handleQuestionChange(qIndex, 'text', e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                placeholder="Enter Question Text"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Options</label>
              {question.options.map((option, oIndex) => (
                <div key={oIndex} className="flex gap-4 mb-2">
                  <input
                    type="text"
                    value={option.optionId}
                    onChange={(e) => handleOptionChange(qIndex, oIndex, 'optionId', e.target.value)}
                    className="w-1/4 p-2 border border-gray-300 rounded-md"
                    placeholder={`Option ID ${oIndex + 1}`}
                  />
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) => handleOptionChange(qIndex, oIndex, 'text', e.target.value)}
                    className="w-3/4 p-2 border border-gray-300 rounded-md"
                    placeholder={`Option ${oIndex + 1}`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Correct Answer</label>
              <input
                type="text"
                value={question.correctAnswer}
                onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                placeholder="Enter Correct Answer ID"
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddQuestion}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Another Question
        </button>

        <div className="mt-6">
          <label className="block text-lg font-medium text-gray-700">Time Limit (in minutes)</label>
          <input
            type="number"
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter Time Limit"
          />
        </div>

        <div className="mt-4">
          <label className="block text-lg font-medium text-gray-700">Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Create Test
        </button>
      </form>
    </div>
  );
};

export default CreateTest;
