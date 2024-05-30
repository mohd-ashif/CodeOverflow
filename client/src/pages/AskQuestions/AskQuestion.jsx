import React from 'react'

const Askquestion = () => {
  return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1> Ask a Public questions</h1>
            <form >
                <div className="ask-form-container">
                    <label htmlFor=""className='ask-ques-title'>
                        <h4>Title </h4>
                        <p>Be specify and imagine you are asking a question to another person </p>
                        <input type="text"  name='questionTitle' id='ask-quest-title '/>
                    </label>

                    <label htmlFor=""className='ask-ques-body'>
                        <h4>Body </h4>
                        <p>    Include all the information someone would need to answer your
                question</p>
                        <input type="text"  name='questionTitle' id='ask-quest-title '/>
                    </label>

                    <label htmlFor=""className='ask-ques-tags'>
                        <h4>Tags </h4>
                        <p>Add up to 5 tags to describe what your question is about</p>
                        <input type="text"  name='questionTitle' id='ask-quest-title '/>
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