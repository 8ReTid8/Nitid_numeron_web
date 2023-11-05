import { useState,useEffect } from "react"
import { Button, Container, Form, Table, Row } from "react-bootstrap";
import { evaluate } from 'mathjs'
import Plot from 'react-plotly.js';
import axios from 'axios'
import { CiAlarmOn } from "react-icons/ci";
const FalsePosition = () => {
    const print = () => {
        console.log(datatable)
        return (
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead align="center">
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">X</th>
                            <th width="30%">XR</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        {datatable.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.iteration}</td>
                                    <td>{element.Xl}</td>
                                    <td>{element.X}</td>
                                    <td>{element.Xr}</td>
                                </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>

        );
    }

    const error = (xold, xnew) => Math.abs((xnew - xold) / xnew) * 100;

    const Calbisection = (xl, xr) => {
        var x1, fX1, fXr, fXl, ea, scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj = {};
        do {
            scope = { x: xr }
            fXr = evaluate(Equation, scope)

            scope = { x: xl }
            fXl = evaluate(Equation, scope)

            x1 = (xl * fXr - xr * fXl) / (fXr - fXl);

            scope = { x: x1 }
            fX1 = evaluate(Equation, scope)
            iter++;
            if (fX1 * fXr > 0) {
                ea = error(xr, x1);
                obj = { iteration: iter, Xl: xl, X: x1, Xr: xr, FX1: fX1 }
                datatable.push(obj)
                xr = x1;
            }
            else if (fX1 * fXr < 0) {
                ea = error(xl, x1);
                obj = { iteration: iter, Xl: xl, X: x1, Xr: xr, FX1: fX1 }
                datatable.push(obj)
                xl = x1;
            }
        } while (ea > e && iter < MAX)
        setans(x1)
    }

    const datatable = [];
    const [pointtable, setpointtable] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation, setEquation] = useState("(x^4)-13")
    const [ans, setans] = useState(0)
    const [XL, setXL] = useState(0)
    const [XR, setXR] = useState(0)
    const [test, settest] = useState([]);

    const datacall=async()=>{
        let i = Math.floor((Math.random()*test.length))
        setEquation(test[i].fx);
        setXL(test[i].xl);
        setXR(test[i].xr);
    }

    useEffect(() => {
        axios.get("http://localhost:1987/Bisection").then((res) => settest(res.data)) 
    }, [])

    const savedata=async()=>{
        axios.post("http://localhost:1987/saveBisection",{Equation,XL,XR}).then((res)=>console.log(res))
    }

    
   
    
    const inputEquation = (event) => {
        setEquation(event.target.value)
    }

    const inputXL = (event) => {
        setXL(event.target.value)
    }

    const inputXR = (event) => {
        setXR(event.target.value)
    }

    const calculateRoot = () => {
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        Calbisection(xlnum, xrnum);
        setpointtable(datatable)
        setHtml(print());
    }

    return (
        <Container>
            <div className="layout"><h1>False position</h1></div>
            <div className="alignown">
                <Form >
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input XL</Form.Label>
                        <input type="number" id="XL" value={XL} onChange={inputXL} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input XR</Form.Label>
                        <input type="number" id="XR" value={XR} onChange={inputXR} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
                    </Form.Group>
                    <div className="alignown">
                        <Button variant="dark" onClick={calculateRoot}>
                            Calculate
                        </Button>
                        <Button variant="dark" onClick={datacall}>
                            <CiAlarmOn size="25px" />
                        </Button>
                        <Button variant="dark" onClick={savedata}>
                            Save
                        </Button>
                    </div>
                    <Plot
                        data={[
                            {
                                x: pointtable.map((point) => (point.X)),
                                y: pointtable.map((point) => (point.FX1)),
                                mode: 'lines',
                                marker: { color: 'blue' }
                            }
                        ]}
                        layout={{ width: 1000, height: 800 }}
                        config={{ staticPlot: false }}
                    />
                </Form>
            </div>
            <br></br>
            <h5>Answer = {ans.toPrecision(7)}</h5>
            <Row>{html}</Row>

        </Container>

    )
}

export default FalsePosition
