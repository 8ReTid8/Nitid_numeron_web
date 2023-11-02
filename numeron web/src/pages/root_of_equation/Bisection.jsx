import { useEffect, useState } from "react"
import { Button, Container, Form, Table,Row } from "react-bootstrap";
import { evaluate } from 'mathjs'
import Plot from 'react-plotly.js'
import axios from 'axios'
const Bisection =()=>{
    const print = () =>{
        console.log(datatable)
        setValueIter(datatable.map((x)=>x.iteration));
        setValueXl(datatable.map((x)=>x.Xl));
        setValueXm(datatable.map((x)=>x.Xm));
        setValueXr(datatable.map((x)=>x.Xr));
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead align="center">
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">XM</th>
                            <th width="30%">XR</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        {datatable.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.Xl}</td>
                                <td>{element.Xm}</td>
                                <td>{element.Xr}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const Calbisection = (xl, xr) => {
        var xm,fXm,fXr,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        do
        {
            xm = (xl+xr)/2.0;
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation, scope)

            scope = {
                x:xm,
            }
            fXm = evaluate(Equation, scope)

            iter ++;
            if (fXm*fXr > 0)
            {
                ea = error(xr, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr,
                    FXm:fXm
                }
                datatable.push(obj)
                xr = xm;
            }
            else if (fXm*fXr < 0)
            {
                ea = error(xl, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr,
                    FXm:fXm
                }
                datatable.push(obj)
                xl = xm;
            }
        }while(ea>e && iter<MAX)
        setX(xm)
    }

    const datatable =[];
    const [pointtable,setpointtable] = useState([])
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueXm, setValueXm] = useState([]);
    const [valueXr, setValueXr] = useState([]);
    
    const [test , settest] = useState([]);
    const datacall=async()=>{
        axios.get("http://localhost:1987/Bisection").then((res)=>settest(res.data))
    }
    useEffect(()=>{
        axios.get("http://localhost:1987/Bisection").then((res)=>settest(res.data))
    },[])

    console.log(test)

    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^4)-13")
    const [X,setX] = useState(0)
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXL = (event) =>{
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) =>{
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        Calbisection(xlnum,xrnum);
        setpointtable(datatable)
        setHtml(print());
           
        // console.log(valueIter)
        // console.log(valueXl)
    }


    return (
        <Container>
            <div className="layout"><h1>Bisection</h1></div>
            <div className="alignown">
                <Form >
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>    
                        <Form.Label>Input XL</Form.Label>
                        <input type="number" id="XL" onChange={inputXL} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>  
                    <Form.Group className="mb-3" as={Row}>  
                        <Form.Label>Input XR</Form.Label>
                        <input type="number" id="XR" onChange={inputXR} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <div className="alignown">
                        <Button variant="dark" onClick={calculateRoot}>
                            Calculate
                        </Button>
                        <Button variant="dark" onClick={datacall}>
                            gay
                        </Button>
                    </div>
                    <Plot
                        data={[
                            {
                                x: pointtable.map((point) => (point.Xm)),
                                y: pointtable.map((point) => (point.FXm)),
                                mode: 'lines',
                                marker: {color: 'blue'}
                            }
                        ]}
                        layout={{width : 1000,height : 800}}
                        config={{ staticPlot: false }}
                    />
                    
                </Form>
            </div>
            <br></br>
            <h5>Answer = {X.toPrecision(7)}</h5>
            <Row>{html}</Row>
           
        </Container>     
    )
}
export default Bisection