import { useState } from 'react'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'

export default function Inputdiff({ cal }) {
    const [Met,setMet] = useState(0)
    const [Diff, setDiff] = useState(1)
    const [X, setX] = useState()
    const [H, setH] = useState()
    const [Equation, setEquation] = useState("e^x")

    const throwinput = () => {
        cal(Diff, X, H, Equation, Met)
    }
    console.log(Met)
    return (
        <Container>
            <div className='alignown'>
                <Form>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input f(x)</Form.Label>
                        <input type="text" value={Equation} onChange={(e) => setEquation(e.target.value)} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Choose method</Form.Label>
                        <select onChange={(e) => setMet(parseFloat(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control">
                            <option value="0">Forward</option>
                            <option value="1">Central</option>
                            <option value="2">Backward</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input X</Form.Label>
                        <input type="number" value={X} onChange={(e) => setX(parseFloat(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input h</Form.Label>
                        <input type="number" value={H} onChange={(e) => setH(parseFloat(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input Divide Differences</Form.Label>
                        <select onChange={(e) => setDiff(parseFloat(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
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
