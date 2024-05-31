import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';

const DisplayAnswer = ({ question }) => {
  if (!Array.isArray(question)) {
    return <div>No answers found</div>; 
  }

  return (
    <div>
      {question.map((ans) => (
        <div className="display-ans" key={ans.id}>
          <p>{ans.answerBody}</p>

          <div className="question-actions-user">
            <div>
              <button type="button">Share</button>
              <button type="button">Delete</button>
            </div>
            <div>
              <p>answer {ans.answeredOn}</p>
              <Link to={`/User/${ans.userId}`} className="user-Link" style={{ color: "#0086d8" }}>
                <Avatar backgroundColor="orange" px="8px" py="5px">
                  {ans.userPosted.charAt(0).toUpperCase()}
                </Avatar>
                <div>
                  {ans.userPosted}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;