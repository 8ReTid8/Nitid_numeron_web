import React, { useState } from 'react'
import InputX_FxSp from '../../components/InputX_FxSp'
import { Container } from 'react-bootstrap'
export default function Spline() {

    const [ans, setans] = useState()

    const calsp = (size, X, Fx, Xfind, met) => {
        if (met == 0) {
            let temp
            for (let i = 0; i < size - 1; i++) {
                if (X[i] <= Xfind && Xfind <= X[i + 1]) {
                    temp = Fx[i] + M(i, Fx, X) * (Xfind - X[i])

                    break
                }
            }
            console.log(temp)
            setans(temp)
        }
        // if (met == 1) {
        //     const n = size;
        //     let matrixA = [[]];
        //     let matrixB = [];

        //     for (let i = 1; i < n; i++) {
        //         const rowMatrix = [];
        //         const x = X[i];
        //         const y = Fx[i];
        //         // console.log(X[i])
        //         for (let j = 0; j < 3 * (i - 1); j++) {
        //             rowMatrix.push(0);
        //             rowMatrix.push(x * x);
        //             rowMatrix.push(x);
        //             rowMatrix.push(1);
        //         }
        //         for (let j = 0; j < 3 * (n - i); j++) {
        //             rowMatrix.push(0);
        //             matrixA.push(rowMatrix);

        //             matrixB.push(y);
        //         }
        //         const rowMatrix2 = [];
        //         for (let j = 0; j < 3 * (i - 1) + 3; j++) {
        //             rowMatrix2.push(0);
        //             rowMatrix2.push(x * x);
        //             rowMatrix2.push(x);
        //             rowMatrix2.push(1);
        //         }
        //         for (let j = 0; j < 3 * (n - i - 1); j++) {
        //             rowMatrix2.push(0);
        //             matrixA.push(rowMatrix2);
        //             matrixB.push(y);
        //         }
        //     }

        //     {
        //         const rowMatrix = [];
        //         const x = X[0];
        //         const y = Fx[0];
        //         rowMatrix.push(x * x);
        //         rowMatrix.push(x);
        //         rowMatrix.push(1);
        //         for (let j = 0; j < 3 * (n - 1); j++) {
        //             rowMatrix.push(0);
        //             matrixA.push(rowMatrix);
        //             matrixB.push(y);
        //         }

        //         const rowMatrix2 = [];
        //         for (let j = 0; j < 3 * (n - 1); j++) {
        //             rowMatrix2.push(0);
        //             const x2 = X[n - 1];
        //             const y2 = Fx[n - 1];
        //             rowMatrix2.push(x2 * x2);
        //             rowMatrix2.push(x2);
        //             rowMatrix2.push(1);
        //             matrixA.push(rowMatrix2);
        //             matrixB.push(y2);
        //         }
        //     }

        //     for (let i = 1; i < n; i++) {
        //         const rowMatrix = [];
        //         const x = X[i];

        //         for (let j = 0; j < 3 * (i - 1); j++) {
        //             rowMatrix.push(0);
        //             rowMatrix.push(2 * x);
        //             rowMatrix.push(1);
        //             rowMatrix.push(0);
        //             rowMatrix.push(-2 * x);
        //             rowMatrix.push(-1);
        //             rowMatrix.push(0);
        //         }
        //         for (let j = 0; j < 3 * (n - i - 1); j++) {
        //             rowMatrix.push(0);
        //             matrixA.push(rowMatrix);
        //             matrixB.push(0);
        //         }
        //     }

        //     {
        //         const rowMatrix = [];
        //         rowMatrix.push(1);
        //         rowMatrix.push(0);
        //         rowMatrix.push(0);
        //         for (let j = 0; j < 3 * (n - 1); j++) {
        //             rowMatrix.push(0);
        //             matrixA.push(rowMatrix);
        //             matrixB.push(0);
        //         }
        //     }

        //     for (let i = 0; i < matrixA.length; i++) {
        //         matrixA[i].push(matrixB[i]);
        //     }

        //     const matrixRREF = rref(matrixA);


        //     const answers = new Array(matrixRREF.length);
        //     for (let i = 0; i < matrixRREF.length; i++) {
        //         answers[i] = matrixRREF[i][matrixRREF[i].length - 1];
        //     }

        //     let result = -1;

        //     for (let i = 0; i < n - 1; i++) {
        //         const a = answers[i * 3];
        //         const b = answers[i * 3 + 1];
        //         const c = answers[i * 3 + 2];
        //         if (Xfind >= X[i] && Xfind <= X[i + 1]) {
        //             result = a * Xfind * Xfind + b * Xfind + c;
        //         }
        //     }

        //     // return { result, x: targetX };
        //     setans(result)

        // }
        if (met == 1) {
            let i = 0;
            for (i = 0; i < X.length - 4; i++) {
                if (X[i] <= Xfind && Xfind <= X[i + 1]) {
                    break;
                }
            }
            let A = [
                [Math.pow(X[i + 1], 2), X[i + 1], 1],
                [0, 0, 0, X[i + 2] ** 2, X[i + 2], 1],
                [0, 0, 0, X[i + 1] ** 2, X[i + 1], 1],
                [0, 0, 0, 0, 0, 0, X[i + 2] ** 2, X[i + 2], 1],
                [Math.pow(X[i], 2), X[i], 1],
                [0, 0, 0, 0, 0, 0, X[i + 3] ** 2, X[i + 3], 1],
                [2 * X[i + 1], 1, 0, -2 * X[i + 2], -1],
                [0, 0, 0, 2 * X[i + 2], 1, 0, -2 * X[i + 3], -1],
                [1],
            ]

            let B = [
                Fx[i + 1],
                Fx[i + 1],
                Fx[i + 2],
                Fx[i + 2],
                Fx[i],
                Fx[i + 3],
                1e-5,
                1e-5,
                1e-5

            ]
            for (let j = 0; j < A.length; j++) {
                for (let k = 0; k < 9; k++) {
                    if (A[j].length < 9) {
                        A[j].push(1e-5);
                    }
                    if (A[j][k] === 0) {
                        A[j][k] = 1e-5;
                    }
                }
            }

            const abc = gauss_jordan(A, B);
            let inRange;
            for (inRange = 0; inRange < 3; inRange++) {
                if (Xfind >= X[i + inRange] && Xfind <= X[i + inRange + 1]) {
                    break;
                }
            }

            // console.log(abc)

            const result = abc[3 * inRange + 0] * Xfind ** 2 + abc[3 * inRange + 1] * Xfind + abc[3 * inRange + 2];
            setans(result);
        }
        if (met == 2) {
            const n = size;
            const h = Array(n - 1);
            const alpha = Array(n - 1);
            const l = Array(n);
            const mu = Array(n - 1);
            const z = Array(n);

            for (let i = 0; i < n - 1; i++) {
                h[i] = X[i + 1] - X[i];
                alpha[i] = (3 / h[i]) * (Fx[i + 1] - Fx[i]) - (3 / h[i - 1]) * (Fx[i] - Fx[i - 1]);
            }

            l[0] = 1;
            mu[0] = 0;
            z[0] = 0;

            for (let i = 1; i < n - 1; i++) {
                l[i] = 2 * (X[i + 1] - X[i - 1]) - h[i - 1] * mu[i - 1];
                mu[i] = h[i] / l[i];
                z[i] = (alpha[i] - h[i - 1] * z[i - 1]) / l[i];
            }

            l[n - 1] = 1;
            z[n - 1] = 0;
            const c = Array(n);
            const b = Array(n - 1);
            const d = Array(n - 1);

            c[n - 1] = 0;
            for (let j = n - 2; j >= 0; j--) {
                c[j] = z[j] - mu[j] * c[j + 1];
                b[j] = (Fx[j + 1] - Fx[j]) / h[j] - h[j] * (c[j + 1] + 2 * c[j]) / 3;
                d[j] = (c[j + 1] - c[j]) / (3 * h[j]);
            }

            let result;
            for (let i = 0; i < n - 1; i++) {
                if (Xfind >= X[i] && Xfind <= X[i + 1]) {
                    const xDiff = Xfind - X[i];
                    const a = Fx[i];
                    result = a + b[i] * xDiff + c[i] * xDiff ** 2 + d[i] * xDiff ** 3;
                    break;
                }
            }

            // return { result, x: targetX }
            setans(result)
        }
    }
    const M = (i, fx, x) => {
        i++
        return (fx[i] - fx[i - 1]) / (x[i] - x[i - 1]);
    }
    const rref = (matrix) => {
        let lead = 0;
        const rowCount = matrix.length;
        const colCount = matrix[0].length;

        for (let r = 0; r < rowCount; r++) {
            if (lead >= colCount) {
                return matrix;
            }
            let i = r;
            while (matrix[i][lead] === 0) {
                i++;
                if (i === rowCount) {
                    i = r;
                    lead++;
                    if (colCount === lead) {
                        return matrix;
                    }
                }
            }

            let temp = matrix[i];
            matrix[i] = matrix[r];
            matrix[r] = temp;

            let val = matrix[r][lead];
            for (let j = 0; j < colCount; j++) {
                matrix[r][j] /= val;
            }

            for (let i = 0; i < rowCount; i++) {
                if (i === r) continue;
                val = matrix[i][lead];
                for (let j = 0; j < colCount; j++) {
                    matrix[i][j] -= val * matrix[r][j];
                }
            }
            lead++;
        }
        return matrix;
    }
    const gauss_jordan=(matrix, matrix2)=> {
        const rows = matrix.length;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < rows; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][j] = 1e-9;
                }
            }
            if (matrix2[i] == 0) {
                matrix2[i] = 1e-9;
            }
        }
        for (let i = 0; i < rows; i++) {
            let divider = matrix[i][i];

            if (divider === 0) {
                divider = 1e-9;
            }

            for (let j = i; j < rows; j++) {
                matrix[i][j] /= divider;
            }
            matrix2[i] /= divider;

            for (let j = 0; j < rows; j++) {
                if (i === j) continue;
                let factor = matrix[j][i];
                for (let k = i; k < rows; k++) {
                    matrix[j][k] -= factor * matrix[i][k];
                }
                matrix2[j] -= factor * matrix2[i];
            }
        }
        console.log(matrix2)
        return matrix2;
    }

    return (
        <Container>
            <div className='layout'><h1>Spline</h1></div>
            <InputX_FxSp cal={calsp}></InputX_FxSp>
            <h5>Answer : {ans}</h5>
        </Container>
    )
}
