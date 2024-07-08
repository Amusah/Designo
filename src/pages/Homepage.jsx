import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';

function Homepage({ toggle, setToggle}) {
  return (
    <div>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Hero />
    </div>
  )
}

export default Homepage