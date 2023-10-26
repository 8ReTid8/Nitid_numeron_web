import { useState } from 'react'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'

export default function InputComposite({ cal }) {
    const [N, setN] = useState()
    const [A, setA] = useState()
    const [B, setB] = useState()
    const [Equation,setEquation] = useState("(4*(x^5))-(3*(x^4))+(x^3)-(6*x)+2")

    const throwinput = () => {
        cal(N,A,B,Equation)
    }
    console.log(A)
    return (
        <Container>
            <div className='alignown'>
                <Form>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input f(x)</Form.Label>
                        <input type="text" value={Equation} onChange={(e) => setEquation(e.target.value)} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input A</Form.Label>
                        <input type="number" value={A} onChange={(e) => setA(parseFloat(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input B</Form.Label>
                        <input type="number" value={B} onChange={(e) => setB(parseFloat(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input N</Form.Label>
                        <input type="number" value={N} onChange={(e) => setN(parseFloat(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <div className="alignown">
                            <Button variant="dark" onClick={throwinput}>
                                Calculate
                            </Button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    )

}
