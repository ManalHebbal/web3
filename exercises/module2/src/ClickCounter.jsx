/* eslint-disable react/prop-types */
import { useState } from 'react'



function ClickCounter({titre,message}) {
    const [count, setCount] = useState(0)

const clickCounter = () => {
    setCount((count) => count + 1)
 }

return (
    <>
    <div className="card">
        <button onClick={(clickCounter)}>
          count is {count}
        </button>
        <h1>{titre}</h1>
        <h1>{count>=10 ? `${message}` : ''}</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        
      </div>
    </>    
)
}

export default ClickCounter