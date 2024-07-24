import React, { useState } from 'react';
// import './index.scss'

import Homepage from './pages/Homepage';
import WebDesign from './pages/WebDesign';
import AppDesign from './pages/AppDesign';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  const [toggle, setToggle] = useState(false);

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage toggle={toggle} setToggle={setToggle} />} />
          
          <Route path="webdesign" element={<WebDesign />} />
          <Route path='appdesign' element={<AppDesign />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
