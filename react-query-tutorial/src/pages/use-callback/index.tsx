import React, { useCallback, useState } from 'react'

const functionsCounter = new Set(); // don't admet dublicated values

function index() {
    const[count , setCount] = useState(0);
    const[countOther , setCountOther] = useState(0);

    // const increment = ()=>{
    //     setCount(count+1);
    // } 
    
    // const decrement = ()=>{
    //     setCount(count-1);
    // }
    // const incrementOtherCounter = ()=>{
    //     setCountOther(countOther+1);
    // }
 

    const  increment = useCallback(()=>{
        // when react will render this  page just  , he will create new reference to this function (increment) if "count"  value change it 
        setCount(count+1)
    },[count]);
    const  decrement = useCallback(()=>{
        // when react will render this  page just  , he will create new reference to this function (decrement) if "count"  value change it 
        setCount(count-1)
    },[count]);

    const incrementOtherCounter = useCallback(()=>{
        // when react will render this  page just  , he will create new reference to this function (incrementOtherCounter) if "countOther"  value change it  , and  other function will be memorize them
        setCountOther(countOther+1);
    },[countOther])

    
    functionsCounter.add(increment);
    functionsCounter.add(decrement);
    functionsCounter.add(incrementOtherCounter);
    console.log(functionsCounter);
    console.log(functionsCounter.size);

  return (
    <div>
        <div>Count: {count}</div>
        <div>otherCounter: {countOther}</div>
        <br />
        <button onClick={increment}>+</button>
        <button  onClick={decrement}>-</ button>
                                           
    <button onClick={incrementOtherCounter}>incrementotherCounter</ button>

    </div>
  )
}

export default index