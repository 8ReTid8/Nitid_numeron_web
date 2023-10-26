import React, { useState } from 'react'
import InputComposite from '../../components/InputComposite'
import { Container } from 'react-bootstrap'
import { evaluate } from 'mathjs'
export default function CompositeSimpson() {
    const [ans, setans] = useState()

    const calsimp = (N, A, B, Equation) => {
        let h = (B - A) / (2 * N)
        let x0 = A
        let xn = B
        let sum = evaluate(Equation, { x: x0 }) + evaluate(Equation, { x: xn })
        let i = 1
        while (i < 2 * N) {
            let xcal = x0 + h * i
            console.log(x0)

            if (i % 2 == 0) {
                sum += 2 * evaluate(Equation, { x: xcal })
            }
            else {
                sum += 4 * evaluate(Equation, { x: xcal })
            }

            i++
        }
        sum *= h / 3
        setans(sum)
    }
    return (
        <Container>
            <div className='layout'><h1>Composite Simpson</h1></div>
            <InputComposite cal={calsimp}></InputComposite>
            <h5>Answer : {ans}</h5>
        </Container>
    )
}
