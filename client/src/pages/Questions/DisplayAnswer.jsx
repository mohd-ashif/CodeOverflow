import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';

const DisplayAnswer = ({ question }) => {


  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button" >
                Share
              </button>
            </div>
            <div >
              <p>answered on {ans.answeredOn}</p>
              <Link
                to={`/Users/${ans.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}
              >
                <Avatar
                  backgroundColor="green "
                  px="8px"
                  py="5px"
                  borderRadius="4px"
                >
                  {question.userPosted.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userPosted}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
