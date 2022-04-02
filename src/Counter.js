import React from 'react'
import { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() =>{
        setCount(count + 1)
      }
      }>Increase</button>
      <button onClick={() => {
        setCount(0)
      }}>Reset</button>
    </div>
  )
}

export default Counter