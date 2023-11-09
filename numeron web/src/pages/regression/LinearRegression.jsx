import React, { useState } from 'react'
import InputReg from '../../components/InputReg'
import { Container } from 'react-bootstrap'

export default function LinearRegression() {
    const [ans, setans] = useState()
    const [show, setshow] = useState([[]])
    let m
    let a
    let sumx
    let sumxy
    let mat
    let x
    let fx
    const calreg = (size, X, Fx, Xfind, M) => {
        m = M + 1
        a = new Array(m).fill(0)
        sumx = new Array(m + (m - 1)).fill(0)
        sumxy = new Array(m).fill(0)
        mat = []
        x = [...X]
        fx = [...Fx]

        addsum(size)
        console.log(show)
        gauss_jaordan()
        addx(Xfind)
    }
    const addx = (Xfind) => {
        let sum = 0;
        for (let i = 0; i < m; i++) {
            sum += a[i] * Math.pow(Xfind, i);
        }
        setans(sum)
    }
    const addsum = (size) => {
        const temp = [];
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < size; j++) {
                sumxy[i] += fx[j] * Math.pow(x[j], i);
            }
        }
        for (let i = 0; i < sumx.length; i++) {
            for (let j = 0; j < size; j++) {
                sumx[i] += Math.pow(x[j], i);
            }
        }
        for (let i = 0; i < m; i++) {
            const addmat = []
            const addmat2 = []
            for (let j = 0; j < m; j++) {
                addmat.push(sumx[j + i]);
                addmat2.push(sumx[j + i]);
            }
            mat.push(addmat)
            temp.push(addmat2)
        }
        // console.log(temp)
        setshow(temp)
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
            <div className='layout'><h1>Polynomial Regression</h1></div>
            <InputReg cal={calreg}></InputReg>
            <h5>Answer : {ans}</h5>
            <div className='layoutregress'>
                {show.map((row, rowIndex) => {
                    return <p key={rowIndex}>{`[${row}]`}</p>
                })}
            </div>
        </Container>
    )
}
