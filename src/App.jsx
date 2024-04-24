/* eslint-disable no-unused-vars */
import React from 'react'
import Dashboard from './pages/dashboard/Dashboard'
import { Navbar } from '@/components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Contact } from './pages/contact/Contact';
import { Room } from './pages/room/Room';
import { Food } from './pages/food/Food';
import { About } from './pages/about/About';


const App = () => {
  return (
    <div>
      <div>
            <Navbar />
              <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/room' element={<Room />}/>
                <Route path='/food' element={<Food />}/>
              </Routes>
        </div>
    </div>
  )
}

export default App