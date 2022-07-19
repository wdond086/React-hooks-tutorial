import React, {useState} from 'react'

function HookCounterThree() {


  // State variable can be a string, number, boolean, object or array
  const [name, setName] = useState({firstName: '', lastName: ''});

  // Use the spread operator to keep everything else but change only the property of the object you want to change
  return (
    <form>
      <input type="text" value={name.firstName} onChange={event => setName({ ...name, firstName: event.target.value })}></input>
      <input type="text" value={name.lastName} onChange={event => setName({ ...name, lastName: event.target.value })}></input>
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
    </form>
  )
}

export default HookCounterThree