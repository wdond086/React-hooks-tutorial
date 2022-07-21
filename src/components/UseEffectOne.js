import React, { useState, useEffect } from 'react'

function UseEffectOne() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const updateName = (newName) => {
    setName(newName);
  }

  return (
    <div>
      <input type="text" value={name} onChange={e => updateName(e.target.value)}></input>
      <button onClick={increment}>Click {count} times</button>
    </div>
  )
}

export default UseEffectOne