import React, { useState } from 'react'
import InputMatrixIter from '../../components/InputMatrixIter'
import { Container,Row,Form } from 'react-bootstrap'

export default function Conjugate() {
    const [ans,setans] = useState([])
    let copy
    let r
    let b
    let d
    let x
    const calconju=(size,mat,B,X)=>{
        copy = mat.map((Row)=>[...Row])
        b = [...B]
        r = new Array(size).fill(0)
        d = new Array(size).fill(0)
        x = [...X]
        let i = 1
        R(size);
        while(conjuCheck(size)){
            if(i==1){
                D0(size);
            }
            else{
                D(size);
            }
            Ans(size);
            R(size);
            i++;
        }
        setans(x)
    }
    const R=(size)=>{
        for(let i=0;i<size;i++){
            let sum=0;
            for(let j=0;j<size;j++){
                sum += copy[i][j]*x[j];
            }
            r[i] = sum - b[i];
        }
    }

    const D0=(size)=>{
        for(let i=0;i<size;i++){
            d[i] = r[i]*-1;
        }
    }

    const A=(size)=>{
        let sumtop = 0;
        let sumbutt = 0;
        let temp = new Array(size).fill(0);
        for(let i=0;i<size;i++){
            for(let j=0;j<size;j++){
                temp[i] += copy[i][j]*d[j];
            }
            sumbutt += temp[i]*d[i];
            sumtop += temp[i]*r[i];
        }
        return sumtop/sumbutt;
    }

    const D=(size)=>{
        let temp = A(size);
        for(let i=0;i<size;i++){
            d[i] = (temp*d[i])-r[i];
        }
    }

    const ramda=(size)=>{
        let sumtop = 0;
        let sumbutt = 0;
        let temp = new Array(size).fill(0);
        for(let i=0;i<size;i++){
            sumtop += d[i]*r[i];
            for(let j=0;j<size;j++){
                temp[i] += copy[i][j]*d[j];
            }
            sumbutt += temp[i]*d[i]; 
        }
        return (sumtop/sumbutt)*-1;
    }

    const Ans=(size)=>{
        let temp = ramda(size);
        for(let i=0;i<size;i++){
            x[i] = x[i]+temp*d[i];
        }
    }
    const conjuCheck=(size)=>{
        let sum=0;
        for(let i=0;i<size;i++){
            sum += r[i]*r[i];
        }
        if(Math.sqrt(sum)<0.01){
            return false;
        }
        else{
            return true;
        }
    }
    return (
        <Container>
            <div className='layout'><h1>Conjugate Gradient</h1></div>
            <InputMatrixIter cal={calconju}></InputMatrixIter>
            <h5>Answer :</h5>
            {ans.map((cell, rowIndex) => (
                    <h5 key={rowIndex}>
                      {`X${rowIndex} = ${cell}`}
                    </h5>
                  ))}
            
        </Container>
      )
}
