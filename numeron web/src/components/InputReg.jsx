import { useState } from 'react'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'

export default function InputReg({ cal }) {
    const [size, setsize] = useState(5)
    const [X, setX] = useState(new Array(size).fill(0))
    const [Fx, setFx] = useState(new Array(size).fill(0))
    const [sizeInput, setSizeInput] = useState(5);
    const [M,setm] = useState();
    const [Xfind,setxfind] = useState();


    const throwinput = () => {
        cal(size, X, Fx,Xfind,M)
    }
    const handleXChange = (rowIndex, event) => {
        const newValue = parseFloat(event.target.value);
        const newX = [...X];
        newX[rowIndex] = newValue;
        setX(newX);
    };
    console.log(M)

    const handleFxChange = (rowIndex, event) => {
        const newValue = parseFloat(event.target.value);
        const newFx = [...Fx];
        newFx[rowIndex] = newValue;
        setFx(newFx);
    };

    const handleSizeSubmit = () => {
        setsize(sizeInput);
        setFx(new Array(sizeInput).fill(0));
        setX(new Array(sizeInput).fill(0));
    };
    return (
        <Container>
            <div className='alignown'>
                <Form>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input size</Form.Label>
                        <input type="number" value={sizeInput} onChange={(e) => setSizeInput(parseInt(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" as={Row}>
                        <div className="alignown">
                            <Button variant="dark" onClick={handleSizeSubmit}>
                                Submit
                            </Button>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                      
                        <Col>
                            <Form.Label>X</Form.Label>
                            {X.map((cell, rowIndex) => (
                                <Row key={rowIndex}>
                                    <Form.Control
                                        type="number"
                                        value={cell}
                                        onChange={(e) => handleXChange(rowIndex, e)}
                                    />
                                </Row>
                            ))}
                        </Col>

                        <Col>
                            <Form.Label>F(X)</Form.Label>
                            {Fx.map((cell, rowIndex) => (
                                <Row key={rowIndex}>
                                    <Form.Control
                                        type="number"
                                        value={cell}
                                        onChange={(e) => handleFxChange(rowIndex, e)}
                                    />
                                </Row>
                            ))}
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input M</Form.Label>
                        <input type="number" value={M} onChange={(e) => setm(parseFloat(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input X to find</Form.Label>
                        <input type="number" value={Xfind} onChange={(e) => setxfind(parseFloat(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
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
