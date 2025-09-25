import { useState } from 'react'
 
import './App.css'
import Navbar from './components/Navbar'
import Container from './components/ReusableComponents/Container'
import { Homepage } from './components/Homepage'

function App() {
 
  return (
    <>

    <Container>
      <Navbar/>
      <Homepage/>
    </Container>
      
    </>
  )
}

export default App
