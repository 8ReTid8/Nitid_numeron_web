import { useState,useEffect } from "react"
import { Button, Container, Form, Table,Row} from "react-bootstrap";
import { evaluate } from 'mathjs'
import Plot from 'react-plotly.js';
import axios from "axios";
import { CiAlarmOn } from "react-icons/ci";
const Onepoint =()=>{
    
    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
    
    const calonepoint=(x0)=>{
        let xold = 0
        let iter = 0
        const e = 0.000001
        const MAX = 50
        let obj = {}
        do{
            xold = x0
            x0 = evaluate(Equation,{x:xold})
            iter++;
            obj = {iteration:iter,X:x0,Xold:xold}
            data.push(obj)
        }while(error(xold,x0)>e && iter<MAX)
        setans(x0)
    }

    const data = []
    const [pointtable,setpointtable] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x+7)/(x+1)")
    const [ans,setans] = useState(0)
    const [X0,setX0] = useState(0)
    const [test,settest] = useState([])

    const datacall=async()=>{
        // axios.get("http://localhost:1987/Bisection").then((res)=>settest(res.data))
        let i = Math.floor((Math.random()*test.length))
        setEquation(test[i].fx);
        setX0(test[i].x);
      
    }
    
    useEffect(()=>{
        axios.get("http://localhost:1987/grap_one_newton").then((res)=>settest(res.data))
    },[])

    
    const inputEquation = (event) =>{
        setEquation(event.target.value)
    }

    const inputX0 = (event) =>{
        setX0(event.target.value)
    }
    const calculateOnepoint = () =>{
        const xnum = parseFloat(X0)
        calonepoint(xnum);
        setHtml(print());
        setpointtable(data)
    }

    const print = () =>{
        console.log(data)
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead align="center">
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="45%">X</th>
                            <th width="45%">Xold</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.X}</td>
                                <td>{element.Xold}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
           
        );
    }

    return (
        <Container>
            <div className="layout"><h1>Onepoint</h1></div>
            <div className="alignown">
                <Form >
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input X0</Form.Label>
                        <input type="number" id="X0" value={X0} onChange={inputX0} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <div className="alignown">
                        <Button variant="dark" onClick={calculateOnepoint}>Calculate</Button>
                        <Button variant="dark" onClick={datacall}><CiAlarmOn size="25px"/></Button>
                    </div>
                    <Plot
                        data={[
                            {
                                x: pointtable.map((point) => (point.X)),
                                y: pointtable.map((point) => (point.Xold)),
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
            <h5>Answer = {ans.toPrecision(7)}</h5>
            
            <Row>{html}</Row>
        </Container>
       
    )
}
export default Onepoint