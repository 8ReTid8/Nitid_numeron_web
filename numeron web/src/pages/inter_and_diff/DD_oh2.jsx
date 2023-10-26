import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Inputdiff from '../../components/Inputdiff'
import { evaluate } from 'mathjs'
export default function DD_oh2() {
    const [ans, setans] = useState()

    const caloh2 = (Diff, X, H, Equation, Met) => {
        if (Met == 0) {
            if (Diff == 1) {
                setans(
                    (-1 * evaluate(Equation, { x: X + 2 * H }) + 4 * evaluate(Equation, { x: X + H }) - 3 * evaluate(Equation, { x: X })) / (2 * H)
                )
            }
            if (Diff == 2) {
                setans(
                    (-1 * evaluate(Equation, { x: X + 3 * H }) + 4 * evaluate(Equation, { x: X + 2 * H }) - 5 * evaluate(Equation, { x: X + H }) + 2 * evaluate(Equation, { x: X })) / (Math.pow(H, 2))
                )
            }
            if (Diff == 3) {
                setans(
                    (-3 * evaluate(Equation, { x: X + 4 * H }) + 14 * evaluate(Equation, { x: X + 3 * H }) - 24 * evaluate(Equation, { x: X + 2 * H }) + 18 * evaluate(Equation, { x: X + H }) - 5 * evaluate(Equation, { x: X })) / (2 * Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (-2 * evaluate(Equation, { x: X + 5 * H }) + 11 * evaluate(Equation, { x: X + 4 * H }) - 24 * evaluate(Equation, { x: X + 3 * H }) + 26 * evaluate(Equation, { x: X + 2 * H }) - 14 * evaluate(Equation, { x: X + H }) + 3 * evaluate(Equation, { x: X })) / (Math.pow(H, 4))
                )
            }
        }
        if (Met == 2) {
            if (Diff == 1) {
                setans(
                    (3 * evaluate(Equation, { x: X }) - 4 * evaluate(Equation, { x: X - H }) + evaluate(Equation, { x: X - 2 * H })) / (2 * H)
                )
            }
            if (Diff == 2) {
                setans(
                    (2 * evaluate(Equation, { x: X }) - 5 * evaluate(Equation, { x: X - H }) + 4 * evaluate(Equation, { x: X - 2 * H }) - evaluate(Equation, { x: X - 3 * H })) / (Math.pow(H, 2))
                )
            }
            if (Diff == 3) {
                setans(
                    (5 * evaluate(Equation, { x: X }) - 18 * evaluate(Equation, { x: X - H }) + 24 * evaluate(Equation, { x: X - 2 * H }) - 14 * evaluate(Equation, { x: X - 3 * H }) + evaluate(Equation, { x: X - 4 * H })) / (2 * Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (3 * evaluate(Equation, { x: X }) - 14 * evaluate(Equation, { x: X - H }) + 26 * evaluate(Equation, { x: X - 2 * H }) - 24 * evaluate(Equation, { x: X - 3 * H }) + 11 * evaluate(Equation, { x: X - 4 * H }) - 2 * evaluate(Equation, { x: X - 5 * H })) / (Math.pow(H, 4))
                )
            }
        }
        if (Met == 1) {
            if (Diff == 1) {
                setans(
                    (-1 * evaluate(Equation, { x: X + 2 * H }) + 8 * evaluate(Equation, { x: X + H }) - 8 * evaluate(Equation, { x: X - H }) + evaluate(Equation, { x: X - 2 * H })) / (12 * H)
                )
            }
            if (Diff == 2) {
                setans(
                    (-1 * evaluate(Equation, { x: X + 2 * H }) + 16 * evaluate(Equation, { x: X + H }) - 30 * evaluate(Equation, { x: X }) + 16 * evaluate(Equation, { x: X - H }) - evaluate(Equation, { x: X - 2 * H })) / (12 * Math.pow(H, 2))
                )
            }
            if (Diff == 3) {
                setans(
                    (-1 * evaluate(Equation, { x: X + 3 * H }) + 8 * evaluate(Equation, { x: X + 2 * H }) - 13 * evaluate(Equation, { x: X + H }) + 13 * evaluate(Equation, { x: X - H }) - 8 * evaluate(Equation, { x: X - 2 * H }) + evaluate(Equation, { x: X - 3 * H })) / (8 * Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (-1 * evaluate(Equation, { x: X + 3 * H }) + 12 * evaluate(Equation, { x: X + 2 * H }) - 39 * evaluate(Equation, { x: X + H }) + 56 * evaluate(Equation, { x: X }) - 39 * evaluate(Equation, { x: X - H }) + 12 * evaluate(Equation, { x: X - 2 * H }) - evaluate(Equation, { x: X - 3 * H })) / (6 * Math.pow(H, 4))
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
