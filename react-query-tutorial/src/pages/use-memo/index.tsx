import React, { useState , useMemo } from 'react'

function index() {

    const randomColor = ()=> "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [age,setAge] = useState("");

    // without useMemo 
    // when we change  any value or any state , he will render the page 
    // and will be generate randomColor 

    //sometimes the  FullName Value  is  very complix and take long time 

    // const FullName = <div style={{color : randomColor()}}>  {firstName} {lastName}</div>

    // he will be  : 
    const FullName = useMemo(()=>{
        // this div will be  re-rendered just when we will be  change  the 'firstName' or  'lastName'
        // else he will displaying (use)  just the  cache value 
      return  <div style={{color : randomColor()}}>  {firstName} {lastName} </div>
    }, [firstName , lastName]) 
    
    // Example 2 
    const [countOne , setCountOne] = useState(0);
    const [countTwo , setCountTwo] = useState(0);

    const incrementCountOne = ()=>{
    setCountOne((countOne+1)%5);
    }

    const incrementCountTwo = ()=>{
    setCountTwo(countTwo+1);
    }

    const isPaire = useMemo( ()=>{
        // in this case  when just this function is  work just when we  change  this  value  of "countOne"  else  he use just the cache value  no need to render this content
        let i=0;
        while(i<1000000000) i++;
        return countOne%2===0;
    }
    ,[countOne])

  return (
    <div>
        <h1>Example 1 </h1>
       Full Name : {FullName}
       <br />
       Age : {age}
       <br />
       <br />
        <input value={firstName} placeholder='First Name' onChange={(e=>setFirstName(e.target.value))} />
        <br /><br />
        <input value={lastName} placeholder='Last Name' onChange={(e=>setLastName(e.target.value))} />
        <br />
        <br />
        <input type='number' value={age}  placeholder='age' onChange={(e=>setAge(e.target.value))} />
        <br />
        <h1>Example 2 </h1>
        <div>
            <button onClick={incrementCountOne}>Count One - {countOne}</button>
            <div>{isPaire  ? "Paire": "Impaire"}</div>
            <button onClick={incrementCountTwo}>Count Two - {countTwo}</button>
</div>

    </div>
  )
}

export default index