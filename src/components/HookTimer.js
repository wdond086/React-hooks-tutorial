import React, { useState, useEffect, useRef } from 'react'

const initialState = 0;

function HookTimer() {

  const [timer, setTimer] = useState(initialState);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    }
  }, [])

  return (
    <div>
      <div>Hook Timer - {timer}</div>
      <button onClick={() => {clearInterval(intervalRef.current)}}>Clear</button>
    </div>
  )
}

export default HookTimer