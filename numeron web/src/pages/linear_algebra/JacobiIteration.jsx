import React, { useState } from 'react'
import InputMatrixIter from '../../components/InputMatrixIter'
import { Container,Row,Form } from 'react-bootstrap'
import { det, matrix } from 'mathjs'


export default function JacobiIteration() {
    const [ans,setans] = useState([])
    // const [Xnew,setXnew] = useState()
    // const [Xold,setXold] = useState()
    let xnew 
    let xold 
    const caljacobi=(size,mat,B,X)=>{
        xnew = [...X]
        xold = [...X]
        do{
          let copy = mat.map((Row)=>[...Row])
          let b = [...B]
          // let xnew = [...X]
          // let xold = []
          for(let i=0;i<size;i++){
            xold[i] = xnew[i]
          }
          for(let i=0;i<size;i++){
            let temp = 0
            for(let j=0;j<size;j++){
              if(i==j){
                continue
              }
              temp += copy[i][j]*xold[j]
            }
            xnew[i] = (b[i]-temp)/copy[i][i]
          }
          // setXnew(x)
          // setXold(xold)
        }while(checkErr(size,xnew,xold))
        setans(xnew)
    }
    const checkErr=(size,x,xold)=>{
      let logic = false;
      for(let i=0;i<size;i++){
        if(Math.abs((x[i]-xold[i])/x[i])*100>0.001){
          logic = true
          break
        }
      }
      return logic
    }
    // const iter=(size,mat,B,X)=>{
    //   do{
    //     caljacobi(size,mat,B,X)
    //   }while(checkErr(size,Xnew,Xold))
    //   setans(Xnew)
    // }

    return (
        <Container>
            <div className='layout'><h1>Jacobi Interation</h1></div>
            <InputMatrixIter cal={caljacobi}></InputMatrixIter>
            <h5>Answer :</h5>
            {ans.map((cell, rowIndex) => (
                    <h5 key={rowIndex}>
                      {`X${rowIndex} = ${cell}`}
                    </h5>
                  ))}
            
        </Container>
      )
}
