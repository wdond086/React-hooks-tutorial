import React, { useEffect, useRef } from 'react'

function FocusInput() {

  const inputRef = useRef(null);

  useEffect(() => {
    // focus the input element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type='text' ref={inputRef}></input>
    </div>
  )
}

export default FocusInput