import { useState,useEffect } from 'react'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'
import axios from 'axios'
import { CiAlarmOn } from 'react-icons/ci'
export default function Inputdiff({ cal }) {
    const [Met,setMet] = useState(0)
    const [Diff, setDiff] = useState(1)
    const [X, setX] = useState()
    const [H, setH] = useState()
    const [Equation, setEquation] = useState("e^x")

    const [mydata,setmydata] = useState([]);
    
    const datacall=async()=>{
        let i = Math.floor((Math.random()*mydata.length))
        setEquation(mydata[i].fx);
        setX(mydata[i].x);
        setH(mydata[i].h);
    }

    useEffect(() => {
        axios.get("http://localhost:1987/ddoh").then((res) => setmydata(res.data)) 
    }, [])

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
                            <Button variant="dark" onClick={datacall}><CiAlarmOn size="25px"/></Button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    )

}
