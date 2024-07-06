import React, { useState } from 'react';
// import './index.scss'

import Homepage from './pages/Homepage';



function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <div className='container'>
      <Homepage toggle={toggle} setToggle={setToggle} />
    </div>
    </>
  )
}

export default App
