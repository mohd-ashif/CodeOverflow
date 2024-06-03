import React , { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import{ AskQuestion }from '../../actions/questions';

const Askquestion = () => {


    const [questionTitle , setQestionTitle] = useState('')
    const [questionBody , setQuestionBody] = useState('')
    const [questionTags , setQuestionTags] = useState('')

    const dispatch = useDispatch();
    const User = useSelector(state => (state.currentUserReducer)) 
    const navigate = useNavigate()

    const handleSubmit= (e)=> {
        e.preventDefault()
         
        dispatch(AskQuestion({ questionTitle, questionBody, questionTags, userPosted : User.result.name , userId : User?.result._id } , navigate))
    }

    const handleEnter = (e)=> {
        if (e.key === 'Enter '){
            setQuestionBody(questionBody + "\n")
        }
    }

  return (


    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1> Ask a Public questions</h1>
            <h2>{questionBody}</h2>
            <form onSubmit={handleSubmit} >
                <div className="ask-form-container">
                    <label htmlFor=""className='ask-ques-title'>
                        <h4>Title </h4>
                        <p>Be specify and imagine you are asking a question to another person </p>
                        <input type="text"  name='questionTitle' id='ask-quest-title' onChange={(e)=> {setQestionTitle(e.target.value)}}/>
                    </label>

                    <label htmlFor=""className='ask-ques-body'>
                        <h4>Body </h4>
                        <p>    Include all the information someone would need to answer your
                question</p>
                        <input type="text"  name='questionTitle' id='ask-quest-title'   onChange={(e)=> {setQuestionBody(e.target.value)}}  onKeyPress={handleEnter}/>
                    </label>

                    <label htmlFor=""className='ask-ques-tags'>
                        <h4>Tags </h4>
                        <p>Add up to 5 tags to describe what your question is about</p>
                        <input type="text"  name='questionTitle' id='ask-quest-title '  onChange={(e)=> {setQuestionTags(e.target.value.split(' '))}} />
                    </label>
                </div>
                <input
            type="submit"
            value="Reivew your question"
            className="review-btn"
          />
            </form>
        </div>

    </div>
  )
}

export default Askquestion