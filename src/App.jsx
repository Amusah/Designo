import React, { useState } from 'react';
// import './index.scss'

import ScrollToTop from './Components/ScrollToTop';
import Homepage from './pages/Homepage';
import WebDesign from './pages/WebDesign';
import AppDesign from './pages/AppDesign';
import GraphicDesign from './pages/GraphicDesign';
import AboutPage from './pages/AboutPage';
import LocationsPage from './pages/LocationsPage';
import Contact from './pages/ContactPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  const [toggle, setToggle] = useState(false);

  return (
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route index element={<Homepage toggle={toggle} setToggle={setToggle} />} />
          
          <Route path="webdesign" element={<WebDesign />} />
          <Route path='appdesign' element={<AppDesign />} />
          <Route path='graphicdesign' element={<GraphicDesign />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='locations' element={<LocationsPage />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
265778