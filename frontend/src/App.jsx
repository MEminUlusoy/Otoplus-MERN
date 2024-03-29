import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navigation from './pages/navigation/Navigation'
import Home from './pages/home/Home'
import Footer from './pages/footer/Footer'
import Carlist from './pages/carList/Carlist'
import Sell from './pages/sell/Sell'
import ShowCar from './pages/showCar/ShowCar'



const App = () => {
  return (
    <BrowserRouter>

      <Navigation/>
  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cars/carlist' element={<Carlist/>} />
        <Route path='/cars/sell' element={<Sell/>} />
        <Route path='/cars/details/:id' element={<ShowCar/>} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App