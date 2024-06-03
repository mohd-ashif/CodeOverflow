import React from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import Avatar from '../../components/Avatar';
import{ deleteAnswer }from '../../actions/questions'
import { useDispatch, useSelector } from 'react-redux';


const DisplayAnswer = ({ question , handleShare}) => {

  const User = useSelector((state) => (state.currentUserReducer))

  const {id } = useParams()
  const dispatch = useDispatch()

  const handleDelete = ( answerId  , noOfAnswers)=> {
    dispatch(deleteAnswer(id, answerId , noOfAnswers -1  ))
  }



  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button" onClick={handleShare} >
                Share
              </button>
              {
  User && User.result && User.result._id === question?.userId && (
    <button className='edit-question-btn' type='button' onClick={ () => handleDelete (ans._id, question.noOfAnswers)  }>
      delete
    </button>
  )
}
            </div>
            <div >
             
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
                <div>
                  {ans.userAnswered}
                </div>
                <div>
                <p>answered {moment(ans.answeredOn).fromNow()}</p>
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
