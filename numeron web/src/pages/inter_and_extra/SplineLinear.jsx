import React, { useState } from 'react'
import InputX_Fx from '../../components/InputX_Fx'
import { Container } from 'react-bootstrap'
export default function SplineLinear() {
    
    const [ans,setans] = useState()
    const calsp=(size, X, Fx,Xfind)=>{
        let temp
        for(let i=0;i<size-1;i++){
            if(X[i]<=Xfind&&Xfind<=X[i+1]){
                temp = Fx[i]+M(i,Fx,X)*(Xfind-X[i])
                
                break
            }
        }
        console.log(temp)
        setans(temp)
    }
    const M=(i,fx,x)=>{
        i++
        return (fx[i]-fx[i-1])/(x[i]-x[i-1]);
    }
    return (
        <Container>
          <div className='layout'><h1>Linear Spline</h1></div>
          <InputX_Fx cal={calsp}></InputX_Fx>
          <h5>Answer : {ans}</h5>
        </Container>
      )
}
