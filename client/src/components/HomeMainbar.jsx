import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionList from '../pages/Home/QuestionList';

const HomeMainbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = 1

  const questionsList = [
    {
      id: 1,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: 'What is a function?',
      questionBody: 'It meant to be',
      questionTags: ['java', 'node js', 'react js', 'mongodb'],
      userPosted: 'mano',
      time: 'jan 1',
    },
    {
      id: 2,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: 'What is a function?',
      questionBody: 'It meant to be',
      questionTags: ['javascript', 'R', 'python'],
      userPosted: 'mano',
      time: 'jan 1',
    },
    {
      id: 3,
      votes: 1,
      noOfAnswers: 0,
      questionTitle: 'What is a function?',
      questionBody: 'It meant to be',
      questionTags: ['javascript', 'R', 'python'],
      userPosted: 'mano',
      time: 'jan 1',
    },
  ];

  const checkAuth = () => {
    if (user == null) {
      alert('Login or Sign up to ask a question');
      navigate('/Auth');
    } else {
      navigate('/AskQuestions');
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
