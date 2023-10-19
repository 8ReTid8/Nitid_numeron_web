import React, { useState } from 'react'
import InputMatrix from '../../components/InputMatrix'
import { Container,Row,Form } from 'react-bootstrap'
import { det, matrix } from 'mathjs'

export default function MatrixInversion() {
    const [X,setX] = useState([])
    const calmatinver=(size,mat,B)=>{
        const ans = []
        let copy = mat.map((Row)=>[...Row])
        let b = [...B]
        let inver = []
        for(let i=0;i<size;i++){
            const addinver = []
            ans.push(0)
            for(let j=0;j<size;j++){
                if(i==j){
                    addinver.push(1)
                }
                else{
                    addinver.push(0)
                }
            }
            inver.push(addinver)
        }

        for (let i = 0; i < size; ++i) {
            for (let j = i + 1; j < size; ++j) {
                let keep = copy[j][i];
                for (let k = 0; k < size; ++k) {
                    copy[j][k] -= (copy[i][k]/copy[i][i])*keep;
                    inver[j][k] -= (inver[i][k]/copy[i][i])*keep;
                }
            }
        }
        
        for (let i = size-1; i >= 0; --i) {
            for (let j = i-1; j >= 0; --j) {
                let keep = copy[j][i];
                for (let k = size-1; k >= 0; --k) {
                    copy[j][k] -= (copy[i][k]/copy[i][i])*keep;
                    inver[j][k] -= (inver[i][k]/copy[i][i])*keep;
                }
            }
        }

        for(let i=0;i<size;i++){
            for(let j=0;j<size;j++){
                inver[i][j] /= copy[i][i];
            }
        }

        for(let i=0;i<size;i++){
            for(let j=0;j<size;j++){
                ans[i] += b[j]*inver[i][j];
            }   
        }
        setX(ans)
    }
    
    return (
        <Container>
            <div className='layout'><h1>Matrix Inversion</h1></div>
            <InputMatrix cal={calmatinver}></InputMatrix>
            <h5>Answer :</h5>
            {X.map((cell, rowIndex) => (
                    <h5 key={rowIndex}>
                      {`X${rowIndex} = ${cell}`}
                    </h5>
                  ))}
            
        </Container>
      )
}
