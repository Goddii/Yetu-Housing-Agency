import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Properties from './components/Properties'
import Agent from './components/Agent'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/properties' element={<Properties/>}/>
        <Route path='/agent' element={<Agent/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
     
    </BrowserRouter>
    
  )
}

export default App
