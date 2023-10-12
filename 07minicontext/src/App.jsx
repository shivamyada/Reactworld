import { useState } from 'react'

import './App.css'
import UserContextprovider from './context/UserContextprovider'
import login from './components/Login'

import Profile from './components/Profile'
function App() {
  
  return (
    <UserContextprovider>
      <h1> hey shivam you are good man </h1>
      <login/>
      <profile/>
    </UserContextprovider>
  )
}

export default App
