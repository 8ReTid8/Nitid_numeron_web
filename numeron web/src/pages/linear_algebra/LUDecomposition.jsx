import React, { useState } from 'react'
import InputMatrix from '../../components/InputMatrix'
import { Container,Row,Form } from 'react-bootstrap'
import { det, matrix } from 'mathjs'


export default function LUDecomposition() {
    const [X,setX] = useState([])
    const calLU=(size,mat,B)=>{
        const ans = []
        let copy = mat.map((Row)=>[...Row])
        let b = [...B]
        let Low = []
        let Up = []
        let y = [];
        for(let i=0;i<size;i++){
            ans.push(0)
            y.push(0)
            const LowR = []
            const UpR = []
            for(let j=0;j<size;j++){
                if(i==j){
                    UpR.push(1)
                }
                else{
                    UpR.push(0)
                }
                LowR.push(0)
            }
            Low.push(LowR)
            Up.push(UpR)
        }

        for (let i = 0; i < size; i++){
            let index = 0;
            for (let j = 0; j < i+1; j++){
                let sum = 0;
                for (let k = 0; k < size; k++)
                    sum += (Low[i][k] * Up[k][j]);
                Low[i][j] = copy[i][j] - sum;
                index++;
            }
 
            for (let j = index; j < size; j++){
                let sum = 0;
                for (let k = 0; k < size; k++)
                    sum += (Low[i][k] * Up[k][j]);
 
                Up[i][j] = (copy[i][j] - sum) / Low[i][i];
            }
        }
       
        // find LY=B
        for(let i=0;i<size;i++){
            let sum = 0;
            for(let j=0;j<size;j++){
                sum += Low[i][j]*y[j];
            }
            y[i] = (b[i]-sum)/Low[i][i];
        }
        // find UX=Y
        for(let i=size-1;i>=0;i--){
            let sum = 0;
            for(let j=0;j<size;j++){
                sum += Up[i][j]*ans[j];
            }
            ans[i] = y[i]-sum;
        }
        setX(ans)
    }


    return (
        <Container>
            <div className='layout'><h1>LU Decomposition</h1></div>
            <InputMatrix cal={calLU}></InputMatrix>
            <h5>Answer :</h5>
            {X.map((cell, rowIndex) => (
                    <h5 key={rowIndex}>
                      {`X${rowIndex} = ${cell}`}
                    </h5>
                  ))}
            
        </Container>
      )
}