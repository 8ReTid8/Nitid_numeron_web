import React, { useState } from 'react'
import InputX_Fx from '../../components/InputX_Fx'
import { Container } from 'react-bootstrap'

export default function Lagrange() {
  const [ans, setans] = useState([]) 
  let x
  let fx
  let y
  let l
  const callag = (size, X, Fx, Xfind) => {
    x = [...X]
    fx = [...Fx]
    l = new Array(size).fill(0)
    y = 0
    for(let i=0;i<size;i++){
        let top = 1;
        let butt = 1;
        for(let j=0;j<size;j++){
            if(i==j){
                continue;
            }
            top *= x[j]-Xfind;
            butt *= x[j]-x[i];
        }
        l[i] = top/butt;
        y += l[i]*fx[i];
    }
    setans(y)
  }
  console.log(fx)

  return (
    <Container>
      <div className='layout'><h1>Lagrange</h1></div>
      <InputX_Fx cal={callag}></InputX_Fx>
      <h5>Answer : {ans}</h5>
    </Container>
  )
}
