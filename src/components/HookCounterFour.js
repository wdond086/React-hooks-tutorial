import React, {useState} from 'react'

function HookCounterFour() {

  // items => is the state variable
  // setItems => is the state setter function
  const [items, setItems] = useState([]);

  const addItem = () => {
    // Make a copy of all the items in the array using the spread operator, then append to that the new object you are creating
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }

  const removeLast = () => {
    setItems(items.slice(0, -1));
  }

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <button onClick={removeLast}>Remove the last number</button>
      <ul>
        {
          items.map(item => <li key={item.id}>{item.value}</li>)
        }
      </ul>
    </div>
  )
}

export default HookCounterFour


/**
 * The useState hook lets you add state to functional components
 * In classes, the state is always an object
 * With the useState hook, the state doesn't have to be an object
 * The useState hook returns an array with 2 elements
 * The first element is the current value of the state, and the second element is a state setter function
 */