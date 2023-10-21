import React, { useState } from 'react'
import InputComposite from '../../components/InputComposite'
import { Container } from 'react-bootstrap'
import { evaluate } from 'mathjs'
export default function CompositeTrapzoidal() {
    const [ans,setans] = useState()
   
    const caltrap =(N,A,B,Equation)=>{
        let h = (B-A)/N
        let x0 = A
        let xn = B 
        let sum = evaluate(Equation,{x:x0}) + evaluate(Equation,{x:xn})
        while(x0<xn){
            x0 += h
            console.log(x0)
            if(x0==xn){
                break
            }
            sum += 2*evaluate(Equation,{x:x0})
        }
        sum*= h/2
        setans(sum)
    }
    return (
        <Container>
            <div className='layout'><h1>Composite Trapzoidal</h1></div>
            <InputComposite cal = {caltrap}></InputComposite>
            <h5>Answer : {ans}</h5>
        </Container>
    )
}
