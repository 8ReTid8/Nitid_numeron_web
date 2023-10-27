import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Inputdiff from '../../components/Inputdiff'
import { evaluate, } from 'mathjs'
export default function DD_oh2() {
    const [ans, setans] = useState()

    const caloh2 = (Diff, X, H, Equation, Met) => {
        const f = (X) => {
            return evaluate(Equation, { x: X });
        }
        console.log(f(1))
        if (Met == 0) {
            if (Diff == 1) {
                setans(
                    (-f(X + 2 * H) + 4 * f(X + H) - 3 * f(X)) / (2 * H)
                )
            }
            if (Diff == 2) {
                setans(
                    (- f(X + 3 * H) + 4 * f(X + 2 * H) - 5 * f(X + H) + 2 * f(X)) / (Math.pow(H, 2))
                )
            }
            if (Diff == 3) {
                setans(
                    (-3 * f(X + 4 * H) + 14 * f(X + 3 * H) - 24 * f(X + 2 * H) + 18 * f(X + H) - 5 * f(X)) / (2 * Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (-2 * f(X + 5 * H) + 11 * f(X + 4 * H) - 24 * f(X + 3 * H) + 26 * f(X + 2 * H) - 14 * f(X + H) + 3 * f(X)) / (Math.pow(H, 4))
                )
            }
        }
        if (Met == 2) {
            if (Diff == 1) {
                setans(
                    (3 * f(X) - 4 * f(X - H) + f(X - 2 * H)) / (2 * H)
                )
            }
            if (Diff == 2) {
                setans(
                    (2 * f(X) - 5 * f(X - H) + 4 * f(X - 2 * H) - f(X - 3 * H)) / (Math.pow(H, 2))
                )
            }
            if (Diff == 3) {
                setans(
                    (5 * f(X) - 18 * f(X - H) + 24 * f(X - 2 * H) - 14 * f(X - 3 * H) + f(X - 4 * H)) / (2 * Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (3 * f(X) - 14 * f(X - H) + 26 * f(X - 2 * H) - 24 * f(X - 3 * H) + 11 * f(X - 4 * H) - 2 * f(X - 5 * H)) / (Math.pow(H, 4))
                )
            }
        }
        if (Met == 1) {
            if (Diff == 1) {
                setans(
                    (-  f(X + 2 * H) + 8 * f(X + H) - 8 * f(X - H) + f(X - 2 * H)) / (12 * H)
                )
            }
            if (Diff == 2) {
                setans(
                    (- f(X + 2 * H) + 16 * f(X + H) - 30 * f(X) + 16 * f(X - H) - f(X - 2 * H)) / (12 * Math.pow(H, 2))
                )
            }
            if (Diff == 3) {
                setans(
                    (- f(X + 3 * H) + 8 * f(X + 2 * H) - 13 * f(X + H) + 13 * f(X - H) - 8 * f(X - 2 * H) + f(X - 3 * H)) / (8 * Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (- f(X + 3 * H) + 12 * f(X + 2 * H) - 39 * f(X + H) + 56 * f(X) - 39 * f(X - H) + 12 * f(X - 2 * H) - f(X - 3 * H)) / (6 * Math.pow(H, 4))
                )
            }
        }
    }

    return (
        <Container>
            <div className='layout'><h1>Divide Differences O(h^2)</h1></div>
            <Inputdiff cal={caloh2}></Inputdiff>
            <h5>Answer : {ans}</h5>
        </Container>
    )
}
