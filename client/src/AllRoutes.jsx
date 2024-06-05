
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions from './pages/Questions/Questions';
import AskQuestion from './pages/AskQuestions/AskQuestion'; 
import DisplaQuestion from './pages/Questions/DisplaQuestion';
import Tags from './pages/Tags/Tags';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/Questions' element={<Questions />} />

      <Route path='/AskQuestions' element={<AskQuestion />} />
      <Route path='/Questions/:id' element={<DisplaQuestion />} />
      <Route path='/tags' element={<Tags />} />
    </Routes>
  );
};

export default AllRoutes;

