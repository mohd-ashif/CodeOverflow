

import {BrowserRouter as Router } from 'react-router-dom'
// import "./App.css"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar'
import AllRoutes from './AllRoutes'
import{fetchAllQuestions}  from './actions/questions'


function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions( ))
    
  }, [dispatch])
  

  return (
    <>
    <div className="app">
      <Router>
      <Navbar /> 
      <AllRoutes />
      </Router>
    
    </div>
    </>
  )
}

export default App
