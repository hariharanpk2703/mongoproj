import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Navigation from './Components/Navigation'
import CardDetails from './Pages/CardDetails'
// import Home from './Home'
import Contact from './Pages/Contact'
import Fav from './Pages/Fav'
import Homes from './Pages/Homes'
import Order from './Pages/Order'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/Home' element = {<Homes /> } />
        <Route path='/contact' element = {<Contact /> } />
        <Route path='/fav' element = {<Fav /> } />
        <Route path='/order' element = {<Order /> } />
        <Route path='/profile' element = {<Profile /> } />
        <Route path='/:category/:id' element={<CardDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
