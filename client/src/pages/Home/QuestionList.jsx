import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionsList}) => {
  return (
    <div>

{
  questionsList.map ((question)=> (
    <Questions  key={question.id} question={question} />
  ))
}
    </div>
  )
}

export default QuestionList ; 