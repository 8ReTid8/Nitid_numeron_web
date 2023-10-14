import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Entity404 from './pages/Entity404';
import Bisection from './pages/root_of_equation/Bisection'
import FalsePosition from './pages/root_of_equation/FalsePosition';
import Onepoint from './pages/root_of_equation/Onepoint';
import NewtonRaphson from './pages/root_of_equation/NewtonRaphson';
import Secant from './pages/root_of_equation/Secant';
import Graphical from './pages/root_of_equation/Graphical';
import GaussElimination from './pages/linear_algebra/GaussElimination';
import Home from './pages/Home';
import CramerRule from './pages/linear_algebra/CramerRule';
import GaussJordan from './pages/linear_algebra/GaussJordan';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <div className='phase'>
        <Routes>
          {/* root of equation */}
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Graphical' element={<Graphical/>}></Route>
          <Route path='/Bisection' element={<Bisection/>}></Route>
          <Route path='/FalsePosition' element={<FalsePosition/>}></Route>
          <Route path='/Onepoint' element={<Onepoint/>}></Route>
          <Route path='/Newton Raphson' element={<NewtonRaphson/>}></Route>
          <Route path='/Secant' element={<Secant/>}></Route>
          <Route path='*' element={<Entity404/>}></Route>
          {/* linear algebra */}
          <Route path='/Cramer' element={<CramerRule/>}></Route>
          <Route path='/GaussElimination' element={<GaussElimination/>}></Route>
          <Route path='/GaussJordan' element={<GaussJordan/>}> </Route>
          <Route path='/MatrixInversion' element={<GaussJordan/>}> </Route>
          <Route path='/LU' element={<GaussJordan/>}> </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
