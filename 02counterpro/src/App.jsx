import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter]=useState(5)
 
//let  counter=5
const addvalue=()=>{


  counter=counter +1
  setcounter(counter)

}
const removevl=( ) =>{
  counter=counter-1
  setcounter(counter)
}


  return (
    <>
      <h1>heu shivam you are superhero</h1>
      <p>counter  vlaue: {counter}</p>
      <button onClick={addvalue}>add value </button>
      <br/>

      <button onClick={removevl}>remove value</button>
      <p>footer: 16</p>
    </>
  )
}

export default App



// assign ment ---- yuo have stop the vlaue when re4eched 20
