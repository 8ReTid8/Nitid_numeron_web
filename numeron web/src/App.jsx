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
import LUDecomposition from './pages/linear_algebra/LUDecomposition';
import MatrixInversion from './pages/linear_algebra/MatrixInversion';
import JacobiIteration from './pages/linear_algebra/JacobiIteration';
import GaussSeidel from './pages/linear_algebra/GaussSeidel';
import Conjugate from './pages/linear_algebra/Conjugate';
import NewtonDivided from './pages/inter_and_extra/NewtonDivided';
import Lagrange from './pages/inter_and_extra/Lagrange';
import LinearRegression from './pages/regression/LinearRegression';
import CompositeTrapzoidal from './pages/inter_and_diff/CompositeTrapzoidal';
import CompositeSimpson from './pages/inter_and_diff/CompositeSimpson';
import MultipleLinearRegression from './pages/regression/MultipleLinearRegression';
import Spline from './pages/inter_and_extra/Spline';
import DD_oh from './pages/inter_and_diff/DD_oh';
import DD_oh2 from './pages/inter_and_diff/DD_oh2';
import Recentdata from './components/Recentdata';
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
          <Route path='/MatrixInversion' element={<MatrixInversion/>}> </Route>
          <Route path='/LU' element={<LUDecomposition/>}> </Route>
          <Route path='/Jacobi' element={<JacobiIteration/>}> </Route>
          <Route path='/GaussSeidel' element={<GaussSeidel/>}> </Route>
          <Route path='/Conjugate' element={<Conjugate/>}> </Route>
          {/* inter and extra */}
          <Route path='/NewtonDivided' element={<NewtonDivided/>}> </Route>
          <Route path='/Lagrange' element={<Lagrange/>}> </Route>
          <Route path='/Spline' element={<Spline/>}> </Route>
    
          <Route path='/PolyRegression' element={<LinearRegression/>}> </Route>
          <Route path='/MultipleLinearRegression' element={<MultipleLinearRegression/>}> </Route>
          {/* inter and diff */}
          <Route path='/CompositeTrapzoidal' element={<CompositeTrapzoidal/>}></Route>
          <Route path='/CompositeSimpson' element={<CompositeSimpson/>}></Route>
          <Route path='/DivideDifferencesOh' element={<DD_oh/>}></Route>
          <Route path='/DivideDifferencesOh2' element={<DD_oh2/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
