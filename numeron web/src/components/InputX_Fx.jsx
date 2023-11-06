import { useState,useEffect } from 'react'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'
import { CiAlarmOn } from 'react-icons/ci';
import axios from 'axios';
export default function InputX_Fx({ cal }) {
    const [size, setsize] = useState(5)
    const [X, setX] = useState([0, 0, 0, 0, 0])
    const [Fx, setFx] = useState([0, 0, 0, 0, 0])
    const [Xfind, setxfind] = useState();
    const [mydata, setmydata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:1987/interextra").then((res) => setmydata(res.data))
    }, [])

    const datacall = async () => {
        let i = Math.floor((Math.random() * mydata.length))
        setsize(mydata[i].size)
        setxfind(mydata[i].xfind)
        setX(JSON.parse(mydata[i].x))
        setFx(JSON.parse(mydata[i].fx));
    }

    const throwinput = () => {
        cal(size, X, Fx, Xfind)
    }
    const handleXChange = (rowIndex, event) => {
        const newValue = parseFloat(event.target.value);
        const newX = [...X];
        newX[rowIndex] = newValue;
        setX(newX);
    };
    console.log(mydata)

    const handleFxChange = (rowIndex, event) => {
        const newValue = parseFloat(event.target.value);
        const newFx = [...Fx];
        newFx[rowIndex] = newValue;
        setFx(newFx);
    };

    const handleSizeSubmit = () => {
        setFx(new Array(size).fill(0));
        setX(new Array(size).fill(0));
    };
    return (
        <Container>
            <div className='alignown'>
                <Form>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input size</Form.Label>
                        <input type="number" value={size} onChange={(e) => setsize(parseInt(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>

                    <Form.Group className="mb-3" as={Row}>
                        <div className="alignown">
                            <Button variant="dark" onClick={handleSizeSubmit}>
                                Submit
                            </Button>
                            <Button variant="dark" onClick={datacall}><CiAlarmOn size="25px" /></Button>
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
