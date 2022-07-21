import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  }
  
  const updateId = (changeEvent) => {
    setId(changeEvent.target.value);
  } 

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [idFromButtonClick])

  return (
    <div>
      <input type="text" value={id} onChange={e => updateId(e)}></input>
      <button type="button" onClick={handleClick}>Get Post</button>
      <div>{post.title}</div>
      { /*}
      <ul>
        { post.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
  */ }
    </div>
  )
}

export default DataFetching