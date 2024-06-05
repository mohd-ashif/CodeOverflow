import React from 'react';
import Questions from './Questions';

const QuestionList = ({ questionsList }) => {
  return (
    <div>
      {
        questionsList.map((question, index) => (
          <Questions key={question.id || index} question={question} />
        ))
      }
    </div>
  );
}

export default QuestionList;
