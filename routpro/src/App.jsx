import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/layout/pages/Home'
import Contact from './components/layout/pages/Contact'
import About from './components/layout/pages/About'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="">shivam yadav (mnc worker)
    
    <BrowserRouter>
    <Navbar/>
    <Routes>

<Route path ="/" element={<Home/>} />
<Route path ="/" element={<About/>} />
<Route path ="/" element={<Contact/>} />










    </Routes>
    
    
    
    
    
    
    
    
    
    
    
    </BrowserRouter>
    
    
    
    
    
    
    
    </div>
   
    </>

       
    
  )
}

export default App
