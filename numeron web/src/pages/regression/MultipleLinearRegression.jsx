import React, { useState } from 'react'
import InputMulReg from '../../components/InputMulReg'
import { Container } from 'react-bootstrap'
export default function MultipleLinearRegression() {
    const [ans,setans] = useState()
    let m
    let n
    let a
    let sumx
    let sumxy
    let mat
    let x
    let fx
    const calregmul=(sizedata,matrix,Fx,Xfind,M)=>{
        m = M+1
        n = sizedata
        sumxy = new Array(m).fill(0)
        sumx = []
        mat = []
        a = new Array(m).fill(0)
        x = matrix.map((Row)=>[...Row])
        fx = [...Fx]
        for(let i=0;i<m;i++){
            const addgay = []
            for(let j=0;j<m;j++){
                addgay.push(0)
            }
            sumx.push(addgay)
        }
        
        addsum()
        gauss_jaordan()
        addx(Xfind)
    }
    const addx=(Xfind)=>{
        let sum=0;
        for(let i=0;i<m;i++){
            if(i==0){
                sum += a[i]
            }
            else{
                sum += a[i]*Xfind;
            }    
        }
        setans(sum)
    }
    const addsum=()=>{
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(i==0){
                    sumxy[i] += fx[j];
                }
                else{           
                    sumxy[i] += fx[j]*x[i-1][j];
                }
            }
        }
        for(let i=0;i<m;i++){
            for(let j=0;j<m;j++){
                for(let k=0;k<n;k++){
                    if(i==0){
                        if(j==0){
                            sumx[i][j] = n;
                            break;
                        }
                        sumx[i][j] += x[j-1][k];
                    }
                    else{
                        if(j==0){
                            sumx[i][j] = sumx[0][i];
                            break;
                        }
                        else{
                            sumx[i][j] += x[i-1][k]*x[j-1][k];
                        }
                    }
                }   
            }
        }
        console.log(mat)

        for(let i=0;i<m;i++){
            const addmat = []
            for(let j=0;j<m;j++){
                addmat.push(sumx[i][j])
            }
            mat.push(addmat)
        }
    }
    const gauss_jaordan = () => {
        for (let i = 0; i < m; ++i) {
            for (let j = i + 1; j < m; ++j) {
                // double ratio = copy[j][i] / copy[i][i];
                let keep = mat[j][i];
                for (let k = 0; k < m; ++k) {
                    // copy[j][k] -= ratio*copy[i][k];
                    mat[j][k] -= (mat[i][k] / mat[i][i]) * keep;
                }
                // b[j] -= ratio * b[i];
                sumxy[j] -= (sumxy[i] / mat[i][i]) * keep;
            }
        }

        for (let i = m - 1; i >= 0; --i) {
            for (let j = i - 1; j >= 0; --j) {
                // double ratio = copy[j][i] / copy[i][i];
                let keep = mat[j][i];
                for (let k = m - 1; k >= 0; --k) {
                    mat[j][k] -= (mat[i][k] / mat[i][i]) * keep;
                    // copy[j][k] -= copy[i][k]*ratio;
                }
                // b[j] -= ratio*b[i];
                sumxy[j] -= (sumxy[i] / mat[i][i]) * keep;
            }
        }

        for (let i = m - 1; i >= 0; i--) {
            a[i] = sumxy[i] / mat[i][i];
        }
    }
    
    return (
        <Container>
            <div className='layout'><h1>Multiple Linear Regression</h1></div>
            <InputMulReg cal={calregmul}></InputMulReg>
            <h5>Answer : {ans}</h5>
        </Container>
    )
}
