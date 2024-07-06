import React from 'react'

import Navbar from '../Components/Navbar'

function Homepage({ toggle, setToggle}) {
  return (
    <main>
      <Navbar toggle={toggle} setToggle={setToggle} />
    </main>
  )
}

export default Homepage