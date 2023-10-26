import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Inputdiff from '../../components/Inputdiff'
import { evaluate } from 'mathjs'
export default function DD_oh() {
    const [ans, setans] = useState()

    const caloh = (Diff, X, H, Equation, Met) => {
        if (Met == 0) {
            if (Diff == 1) {
                setans(
                    (evaluate(Equation, { x: X + H }) - evaluate(Equation, { x: X })) / H
                )
            }
            if (Diff == 2) {
                setans(
                    (evaluate(Equation, { x: X + 2 * H }) - 2 * evaluate(Equation, { x: X + H }) + evaluate(Equation, { x: X })) / (Math.pow(H, 2))
                )
            }
            if (Diff == 3) {
                setans(
                    (evaluate(Equation, { x: X + 3 * H }) - 3 * evaluate(Equation, { x: X + 2 * H }) + 3 * evaluate(Equation, { x: X + H }) - evaluate(Equation, { x: X })) / (Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (evaluate(Equation, { x: X + 4 * H }) - 4 * evaluate(Equation, { x: X + 3 * H }) + 6 * evaluate(Equation, { x: X + 2 * H }) - 4 * evaluate(Equation, { x: X + H }) + evaluate(Equation, { x: X })) / (Math.pow(H, 4))
                )
            }
        }
        if (Met == 2) {
            if (Diff == 1) {
                setans(
                    (evaluate(Equation, { x: X }) - evaluate(Equation, { x: X - H })) / H
                )
            }
            if (Diff == 2) {
                setans(
                    (evaluate(Equation, { x: X }) - 2 * evaluate(Equation, { x: X - H }) + evaluate(Equation, { x: X - 2 * H })) / (Math.pow(H, 2))
                )
            }
            if (Diff == 3) {
                setans(
                    (evaluate(Equation, { x: X }) - 3 * evaluate(Equation, { x: X - H }) + 3 * evaluate(Equation, { x: X - 2 * H }) - evaluate(Equation, { x: X - 3 * H })) / (Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (evaluate(Equation, { x: X }) - 4 * evaluate(Equation, { x: X - H }) + 6 * evaluate(Equation, { x: X - 2 * H }) - 4 * evaluate(Equation, { x: X - 3 * H }) + evaluate(Equation, { x: X - 4 * H })) / (Math.pow(H, 4))
                )
            }
        }
        if (Met == 1) {
            if (Diff == 1) {
                setans(
                    (evaluate(Equation, { x: X + H }) - evaluate(Equation, { x: X - H })) / (2 * H)
                )
            }
            if (Diff == 2) {
                setans(
                    (evaluate(Equation, { x: X + H }) - 2 * evaluate(Equation, { x: X }) + evaluate(Equation, { x: X - H })) / H
                )
            }
            if (Diff == 3) {
                setans(
                    (evaluate(Equation, { x: X + 2 * H }) - 2 * evaluate(Equation, { x: X + H }) + 2 * evaluate(Equation, { x: X - H }) - evaluate(Equation, { x: X - 2 * H })) / (Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (evaluate(Equation, { x: X + 2 * H }) - 4 * evaluate(Equation, { x: X + H }) + 6 * evaluate(Equation, { x: X }) - 4 * evaluate(Equation, { x: X - H }) + evaluate(Equation, { x: X - 2 * H })) / (Math.pow(H, 4))
                )
            }
        }
    }
    return (
        <Container>
            <div className='layout'><h1>Divide Differences O(h)</h1></div>
            <Inputdiff cal={caloh}></Inputdiff>
            <h5>Answer : {ans}</h5>
        </Container>
    )
}
