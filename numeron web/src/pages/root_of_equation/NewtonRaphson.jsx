import { useState,useEffect } from "react"
import { Button, Container, Form, Table,Row } from "react-bootstrap";
import { evaluate,derivative } from 'mathjs'
import Plot from 'react-plotly.js';
import axios from "axios";
import { CiAlarmOn } from "react-icons/ci";
const NewtonRaphson =()=>{
    const print = () =>{
        console.log(data)
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead align="center">
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="45%">Xnew</th>
                            <th width="45%">Xold</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.Xnew}</td>
                                <td>{element.Xold}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
    const addFx=(add)=>{
        return evaluate(Equation,{x:add});
    }
    const diffFx=(add)=>{
        return derivative(Equation,'x').evaluate({x:add})
    }
    const Calnewton = (x) => {
        var xold;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        do{
            xold = x
            x = xold - (addFx(xold)/diffFx(xold))
            console.log(diffFx(xold))
            iter++
            obj = {iteration:iter,Xnew:x,Xold:xold}
            data.push(obj)
        }while(error(xold,x)>e && iter<MAX)
        setans(x)
    }

    const data =[];
    const [pointtable,setpointtable] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^2)-7")
    const [ans,setans] = useState(0)
    const [X0,setX0] = useState(0)

    const [test , settest] = useState([]);

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


    const calculateNewton = () =>{
        const x0num = parseFloat(X0)
        Calnewton(x0num);
        setHtml(print());
        setpointtable(data)
    }

    return (
            <Container>
                <div className="layout"><h1>Newton Raphson</h1></div>
                <div className="alignown">
                    <Form >
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label>Input f(x)</Form.Label>
                            <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Row}>    
                            <Form.Label>Input X0</Form.Label>
                            <input type="number" id="XL" value={X0} onChange={inputX0} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                        </Form.Group>  

                        <div className="alignown">
                            <Button variant="dark" onClick={calculateNewton}>
                                Calculate
                            </Button>
                            <Button variant="dark" onClick={datacall}><CiAlarmOn size="25px"/></Button>
                        </div>
                        <Plot
                        data={[
                            {
                                x: pointtable.map((point) => (point.Xold)),
                                y: pointtable.map((point) => (point.Xnew)),
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

export default NewtonRaphson