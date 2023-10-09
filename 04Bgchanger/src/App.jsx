import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")


  return (
    
     
    

      <div className='w-full h-screen  duration-200'
         style={{backgroundColor:color}}>
               <h1 className='bg-green-400'>hey shivam yadav ypu are </h1>


  
      <div className='fixed flex  flex-wrap
       justyfy-center bottom-12  inset-x-0 px-2'> 
      <div className='flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl'>
      <button onClick={() =>setColor("red")} className='outline-none px-4 py-4
         rounded-full text-white'
         style={{backgroundColor:"red"}}>red</button>
         <button onClick={() =>setColor("yellow")}className='outline-none px-4 py-4
         rounded-full text-white'
         style={{backgroundColor:"yellow"}}>yellow</button>
         <button onClick={() =>setColor("pink")} className='outline-none px-4 py-4
         rounded-full text-white'
         style={{backgroundColor:"pink"}}>pink</button>
         <button onClick={() =>setColor("green")} className='outline-none px-4 py-4
         rounded-full text-white'
         style={{backgroundColor:"green"}}>green</button>
         <button onClick={() =>setColor("orange")} className='outline-none px-4 py-4
         rounded-full text-white'
         style={{backgroundColor:"orange"}}>orange</button>
         <button onClick={() =>setColor("blue")} className='outline-none px-4 py-4
         rounded-full text-white'
         style={{backgroundColor:"blue"}}>blue</button>
      </div>   
       </div>
       </div>
  
   
  )
}

export default App
