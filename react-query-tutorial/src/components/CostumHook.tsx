import React, { useRef, useState } from 'react';
import useAsyncHook from './useAsyncHook';

function CostumHook() {
  const [data, setData] = useAsyncHook('https://jsonplaceholder.typicode.com/posts');
   
    const [value , setValue ] = useState("");
    
  return (
    <div>
      <h1>Posts</h1>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>setData([...data , {id:1236 , body:"",title:value}])}> addd </button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CostumHook;