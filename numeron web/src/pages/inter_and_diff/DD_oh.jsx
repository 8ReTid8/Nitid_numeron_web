import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Inputdiff from '../../components/Inputdiff'
import { evaluate } from 'mathjs'
export default function DD_oh() {
    const [ans, setans] = useState()

    const caloh = (Diff, X, H, Equation, Met) => {
        const f = (X) => {
            return evaluate(Equation, { x: X });
        }

        if (Met == 0) {
            if (Diff == 1) {
                setans(
                    (f(X + H) - f(X)) / H
                )
            }
            if (Diff == 2) {
                setans(
                    (f(X + 2 * H) - 2 * f(X + H) + f(X)) / (Math.pow(H, 2))
                )
            }
            if (Diff == 3) {
                setans(
                    (f(X + 3 * H) - 3 * f(X + 2 * H) + 3 * f(X + H) - f(X)) / (Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (f(X + 4 * H) - 4 * f(X + 3 * H) + 6 * f(X + 2 * H) - 4 * f(X + H) + f(X)) / (Math.pow(H, 4))
                )
            }
        }
        if (Met == 2) {
            if (Diff == 1) {
                setans(
                    (f(X) - f(X - H)) / H
                )
            }
            if (Diff == 2) {
                setans(
                    (f(X) - 2 * f(X - H) + f(X - 2 * H)) / (Math.pow(H, 2))
                )
            }
            if (Diff == 3) {
                setans(
                    (f(X) - 3 * f(X - H) + 3 * f(X - 2 * H) - f(X - 3 * H)) / (Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (f(X) - 4 * f(X - H) + 6 * f(X - 2 * H) - 4 * f(X - 3 * H) + f(X - 4 * H)) / (Math.pow(H, 4))
                )
            }
        }
        if (Met == 1) {
            if (Diff == 1) {
                setans(
                    (f(X + H) - f(X - H)) / (2 * H)
                )
            }
            if (Diff == 2) {
                setans(
                    (f(X + H) - 2 * f(X) + f(X - H)) / H
                )
            }
            if (Diff == 3) {
                setans(
                    (f(X + 2 * H) - 2 * f(X + H) + 2 * f(X - H) - f(X - 2 * H)) / (Math.pow(H, 3))
                )
            }
            if (Diff == 4) {
                setans(
                    (f(X + 2 * H) - 4 * f(X + H) + 6 * f(X) - 4 * f(X - H) + f(X - 2 * H)) / (Math.pow(H, 4))
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
