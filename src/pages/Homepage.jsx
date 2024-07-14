import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Services from '../Components/Services';

function Homepage({ toggle, setToggle}) {
  return (
    <div>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Hero />
      <Services />
    </div>
  )
}

export default Homepage