import { useState } from 'react'
import Bisection from './Bisection'
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div><Bisection></Bisection></div>

  )
}

export default App
