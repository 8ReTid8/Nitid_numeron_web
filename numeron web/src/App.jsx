import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Entity404 from './entity404';
import Bisection from './pages/Bisection'
import FalsePosition from './pages/FalsePosition';
import Onepoint from './pages/Onepoint';
import Graphical from './pages/Graphical';

import Home from './pages/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <div className='phase'>
        <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/Graphical' element={<Graphical/>}></Route>
          <Route path='/Bisection' element={<Bisection/>}></Route>
          <Route path='/FalsePosition' element={<FalsePosition/>}></Route>
          <Route path='/Onepoint' element={<Onepoint/>}></Route>
          <Route path='*' element={<Entity404/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
