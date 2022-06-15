import React, { useState } from 'react'
import './App.style.css';

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setName(e.target.value);
  }
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }
  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
   }
  return (
    <>
    <div className='questions'>
        Nome: 
        <input type="text" value={name} onChange={handleName} />
      Sobrenome:
        <input type="text" value={lastName} onChange={handleLastName} />
      Idade: 
        <input type="text" value={age} onChange={handleAge} />    
        <hr/>
    </div>
    <div className='values'>
      Olá {name} {lastName}, Tudo bem? 
      <br/>
      Você tem {age} anos.
    </div>
    </>
  )
}

export default App
