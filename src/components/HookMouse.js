import React, { useState, useEffect } from 'react'

function HookMouse() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (mouseEvent) => {
    console.log("Mouse event");
    setX(mouseEvent.clientX);
    setY(mouseEvent.clientY);
  }

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("useEffect cleanup called");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, [])

  return (
    <div>Hooks X - {x}, Y - {y}</div>
  )
}

export default HookMouse