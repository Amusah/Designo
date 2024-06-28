import { useState } from 'react'
import './index.scss'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`${styles.textColor}`}>
      Hello react
    </div>
  )
}

export default App
