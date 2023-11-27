import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <h1 className='bg-red-400'>heyshivam </h1>
     <Card   username="shiva yadav"  btnText="buy2xnow"/>
     <Card  username="sanjay yadav"  btnText="buy3xnow"/>
    </>
  )
}

export default App
