import { List } from '@/components/genericType/GenericType'
import React from 'react'


interface Person {
    id: number;
    name: string;
    age: number;
  }

 

const genericComponentPage = () => {
  return (
    <div>
     <List<string>
        items={['apple', 'banana', 'orange']}
        renderItem={(item) => <span>{item}</span>}
        /> 

<List<Person>
  items={[
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 40 },
  ]}
  renderItem={(person) => (
    <div>
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
    </div>
  )}
/>
    </div>
  )
}

export default genericComponentPage