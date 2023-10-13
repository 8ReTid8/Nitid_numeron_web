import React, { useState } from 'react'
import InputMatrix from '../../components/InputMatrix'
import { Container,Row,Form } from 'react-bootstrap'
import { det, matrix } from 'mathjs'
export default function CramerRule() {
  const [X,setX] = useState([])
  const calcramer=(size,mat,B)=>{
    const ans = []
    console.log(size)
    // console.log(det(size,matrix))
    console.log(det(matrix(mat)))
    for(let i=0;i<size;i++){
      let copy = mat.map((Row)=>[...Row])
     
      for(let j=0;j<size;j++){
          copy[j][i] = B[j];
          
      }
      console.log(copy)
      ans.push(det(matrix(copy))/det(matrix(mat)))         
    }
    setX(ans)
  }
  console.log(X);

  // const det=(size,matrix)=>{
  //   let detans = 0;
  //   for(let i=0;i<size;i++){
  //       let minus = 1,head = 1;
  //       for(let j=0;j<size;j++){
  //           head *= matrix[j][(i+j)%size];
  //           minus *= matrix[size-j-1][(i+j)%size];
  //       }
  //       detans += head - minus;
  //   }
  //   return detans;
  // }
  return (
    <Container>
        
        <div className='layout'><h1>Cramer Rule</h1></div>
        <InputMatrix cal={calcramer}></InputMatrix>
        <h5>Answer :</h5>
        {X.map((cell, rowIndex) => (
                <h5 key={rowIndex}>
                  {`X${rowIndex} = ${cell}`}
                </h5>
              ))}
        
    </Container>
    
  )
}
