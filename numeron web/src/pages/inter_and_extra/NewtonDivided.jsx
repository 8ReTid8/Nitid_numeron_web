import React, { useState } from 'react'
import InputX_Fx from '../../components/InputX_Fx'
import { Container, Row, Form } from 'react-bootstrap'

export default function NewtonDivided() {
  const [ans, setans] = useState([])
  let c 
  let x
  let fx
  const calnew = (size, X, Fx, Xfind) => {
    x = [...X]
    fx = [...Fx]
    c = new Array(size).fill(0)
    findC(size)
    console.log(c)
    findy(Xfind, size)
  }
  console.log(fx)
  const findC = (size) => {
    c[0] = fx[0]
    for (let i = 1; i < size; i++) {
      for (let j = 0; j < i + 1; j++) {
        let divide = 1;
        for (let k = 0; k < i + 1; k++) {
          if (j == k) {
            continue;
          }
          divide *= x[j] - x[k];
        }
        c[i] += (fx[j] / divide);
      }
    }
  }

  const findy = (Xfind, size) => {
    let y = 0
    for (let i = 0; i < size; i++) {
      let sum = c[i];
      for (let j = 0; j < i; j++) {
        sum *= (Xfind - x[j]);
      }
      y += sum;
    }
    setans(y);
  }

  return (
    <Container>
      <div className='layout'><h1>Newton Divided</h1></div>
      <InputX_Fx cal={calnew}></InputX_Fx>
      <h5>Answer : {ans}</h5>
    </Container>
  )
}
