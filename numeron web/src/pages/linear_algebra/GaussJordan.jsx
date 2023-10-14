import React, { useState } from 'react'
import InputMatrix from '../../components/InputMatrix'
import { Container,Row,Form } from 'react-bootstrap'
import { det, matrix } from 'mathjs'

export default function GaussJordan() {
    const [X,setX] = useState([])
    const calgaussjor=(size,mat,B)=>{
        const ans = []
        let copy = mat.map((Row)=>[...Row])
        let b = [...B]
        for (let i = 0; i < size; ++i) {
            ans.push(0)
            for (let j = i + 1; j < size; ++j) {
                // double ratio = copy[j][i] / copy[i][i];
                let keep = copy[j][i];
                for (let k = 0; k < size; ++k) {
                    // copy[j][k] -= ratio*copy[i][k];
                    copy[j][k] -= (copy[i][k]/copy[i][i])*keep;
                }
                // b[j] -= ratio * b[i];
                b[j] -= (b[i]/copy[i][i])*keep;
            }
        }
     
        for (let i = size-1; i >= 0; --i) {
            for (let j = i-1; j >= 0; --j) {
                // double ratio = copy[j][i] / copy[i][i];
                let keep = copy[j][i];
                for (let k = size-1; k >= 0; --k) {
                    copy[j][k] -= (copy[i][k]/copy[i][i])*keep;
                    // copy[j][k] -= copy[i][k]*ratio;
                }
                // b[j] -= ratio*b[i];
                b[j] -= (b[i]/copy[i][i])*keep;
            }
        }

        for(let i=size-1;i>=0;i--){   
            ans[i] = b[i]/copy[i][i];
        }  
        setX(ans)
    }
    console.log(X);
  
    
    return (
      <Container>
          <div className='layout'><h1>Gauss Jordan</h1></div>
          <InputMatrix cal={calgaussjor}></InputMatrix>
          <h5>Answer :</h5>
          {X.map((cell, rowIndex) => (
                  <h5 key={rowIndex}>
                    {`X${rowIndex} = ${cell}`}
                  </h5>
                ))}
          
      </Container>
    )
}
