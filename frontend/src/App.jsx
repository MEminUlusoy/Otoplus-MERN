import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navigation from './pages/navigation/Navigation'
import Home from './pages/home/Home'
import Footer from './pages/footer/Footer'
import Carlist from './pages/carList/Carlist'
import Sell from './pages/sell/Sell'



const App = () => {
  return (
    <BrowserRouter>

      <Navigation/>
  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/carlist' element={<Carlist/>} />
        <Route path='/sell' element={<Sell/>} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App