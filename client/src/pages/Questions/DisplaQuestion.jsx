import React from 'react'
import LeftSidebar from '../../components/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar'
import RightSidebar from '../../components/RightSidebar'
import QuestionsDetails from './QuestionsDetails'



const DisplaQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <QuestionsDetails />
        <RightSidebar />
      </div>
    </div>
  )
}

export default DisplaQuestion