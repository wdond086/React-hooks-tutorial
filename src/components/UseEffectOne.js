import React, { useState, useEffect } from 'react'

function UseEffectOne() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <button onClick={increment}>Click {count} times</button>
    </div>
  )
}

export default UseEffectOne