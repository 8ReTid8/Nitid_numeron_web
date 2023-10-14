import React, { useState } from 'react'
import InputMatrix from '../../components/InputMatrix'
import { Container,Row,Form } from 'react-bootstrap'
import { det, matrix } from 'mathjs'


export default function LUDecomposition() {

    const calLU=(size,mat,B)=>{
        const ans = []
        let copy = mat.map((Row)=>[...Row])
        let b = [...B]
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
            y[i] = (B[i]-sum)/Low[i][i];
        }
        // find UX=Y
        for(let i=size-1;i>=0;i--){
            let sum = 0;
            for(let j=0;j<size;j++){
                sum += Up[i][j]*x[j];
            }
            x[i] = y[i]-sum;
            System.out.println(Math.ceil(x[i]));
        }
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