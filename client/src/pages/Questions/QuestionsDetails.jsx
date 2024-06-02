
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import upvotes from '../../assets/sort-up.svg';
import downVotes from '../../assets/sort-down.svg';
import { postAnswer } from '../../actions/questions'
import Avatar from "../../components/Avatar";
import DisplaQuestion from './DisplaQuestion';
import DisplayAnswer from "../Questions/DisplayAnswer";

const QuestionsDetails = () => {

  const { id } = useParams();

  const questionsList = useSelector(state => state.questionReducer)
  console.log(questionsList)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [answer, setAnswer] = useState('')

  const User = useSelector((state) => (state.currentUserReducer))
  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User == null) {
      alert('login  or sign up to answer a question ')
      navigate('/')

    } else {
      if (answer == '') {
        alert('Enter Answer before submit ')
      } else {
        dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: answer, userAnswered: User.result.name }))
      }
    }


  }


  return (
    <div className='question-details-page'>
      {
        questionsList.data === null ?
          <h1>Loading ...</h1> :
          <>
            {
              questionsList.data.filter(question => question._id === id).map(question => (
                <div key={question._id}>
                  <section className='question-details-container'>
                    <h1>{question.questionTitle}</h1>
                    <div className="question-details-container-2">
                      <div className="question-votes">
                        <img src={upvotes} alt="upvotes" width='18' />
                        <p>{question.upVote.length - question.downVote.length}</p>
                        <img src={downVotes} alt="downVotes" width='18' />
                      </div>
                      <div style={{ width: "100%" }}>
                        <p className='question-body'>{question.questionBody}</p>
                        <div className="question-details-tags">
                          {
                            question.questionTags.map((tag) => (
                              <p key={tag}>{tag}</p>
                            ))
                          }
                        </div>
                        <div className="question-action-user">
                          <div>
                            <button className='edit-question-btn' type='button'>share</button>
                            <button className='edit-question-btn' type='button'>delete</button>
                          </div>
                          <div>
                            <p>asked {question.askedOn}</p>
                            <Link
                              to={`/Users/${question.userId}`}
                              className="user-link"
                              style={{ color: "#0086d8" }}
                            >
                              <Avatar
                                backgroundColor="orange"
                                px="8px"
                                py="5px"
                                borderRadius="4px"
                              >
                                {question.userPosted.charAt(0).toUpperCase()}
                              </Avatar>
                              <div>{question.userPosted}</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {question.noOfAnswers !== 0 && (
                    <section>
                      <h3>{question.noOfAnswers} Answers</h3>
                      <DisplayAnswer
                        key={question._id}
                        question={question}
                      />
                    </section>
                  )}
                  <section className="post-ans-container">
                    <h3>Your Answer</h3>
                    <form onSubmit={(e) => { handlePostAns(e, question.answerLength) }}>
                      <textarea name="" id="" cols="30" rows="10"  onChange={(e) => setAnswer(e.target.value)} ></textarea>
                      <br />
                      <input type="submit" className="post-ans-btn" value="Post Your Answer" />
                    </form>
                    <p>
                      Browse other questions tagged
                      {
                        question.questionTags.map((tag) => (
                          <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                        ))
                      } or {
                        <Link to='/AskQuestion' style={{ textDecoration: "none", color: "#009dff" }}> ask your own question</Link>
                      }
                    </p>
                  </section>
                </div>
              ))
            }
          </>
      }
    </div>
  );
}

export default QuestionsDetails;
