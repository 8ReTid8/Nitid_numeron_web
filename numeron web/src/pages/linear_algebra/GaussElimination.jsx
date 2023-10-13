import React, { useState } from 'react'
import InputMatrix from '../../components/InputMatrix'
import { Container,Row,Form } from 'react-bootstrap'
import { det, matrix } from 'mathjs'

export default function GaussElimination() {
    const [X,setX] = useState([])
    const calgauss=(size,mat,B)=>{
        const ans = []
        for (let i = 0; i < size; ++i) {
            ans.push(0)
            for (let j = i + 1; j < size; ++j) {
                let ratio = mat[j][i] / mat[i][i];
                for (let k = 0; k < size; ++k) {
                    mat[j][k] -= ratio * mat[i][k];
                }
                B[j] -= ratio * B[i];
            }
        }

        for(let i=size-1;i>=0;i--){
            for(let j=i+1;j<size;j++){
                 B[i] -= mat[i][j]*ans[j];
            }
            ans[i] = B[i]/mat[i][i];
        }
        setX(ans)
    }
    console.log(X);
  
    
    return (
      <Container>
          <div className='layout'><h1>Gauss Elimination</h1></div>
          <InputMatrix cal={calgauss}></InputMatrix>
          <h5>Answer :</h5>
          {X.map((cell, rowIndex) => (
                  <h5 key={rowIndex}>
                    {`X${rowIndex} = ${cell}`}
                  </h5>
                ))}
          
      </Container>
      
    )
}
