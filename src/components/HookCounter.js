import React, {useState} from 'react'


// Example of useState hook

function HookCounter() {

  // Array destructuring
  // Here we have a state variable called count, and a method to modify the said variable, setCount
  // State variable count here is initialized to 0
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>Count {count}</button>
  )
}

export default HookCounter