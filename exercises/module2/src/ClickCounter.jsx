/* eslint-disable react/prop-types */
import { useState } from 'react'


function ClickCounter({titre,message}) {
    const storedCount = JSON.parse(localStorage.getItem("count"));
  const [count, setCount] = useState(storedCount ?? 0);
    const clickCounter = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem("count", JSON.stringify(newCount))}

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