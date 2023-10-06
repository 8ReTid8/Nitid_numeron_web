import { useState } from "react"
import { Button, Container, Form, Table,Row } from "react-bootstrap";
import { evaluate } from 'mathjs'

const Secant =()=>{
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
    const Calsecant = (x0, x1) => {
        var xtemp;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        while(error(x0,x1)>e && iter<MAX){
            xtemp = x1;
            x1 = x1 - (addFx(x1)*(x1-x0))/(addFx(x1)-addFx(x0))
            x0 = xtemp;
            iter++
            obj = {iteration:iter,Xnew:x1,Xold:x0}
            data.push(obj)
        }
        setans(x1)
    }

    const data =[];
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^2)-7")
    const [ans,setans] = useState(0)
    const [X0,setX0] = useState(0)
    const [X1,setX1] = useState(0)

    const inputEquation = (event) =>{
        setEquation(event.target.value)
    }

    const inputX0 = (event) =>{
        setX0(event.target.value)
    }

    const inputX1 = (event) =>{
        setX1(event.target.value)
    }

    const calculateRoot = () =>{
        const x0num = parseFloat(X0)
        const x1num = parseFloat(X1)
        Calsecant(x0num,x1num);
     
        setHtml(print());
    }

    return (
            <Container>
                <div className="layout"><h1>Secant</h1></div>
                <div className="alignown">
                    <Form >
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label>Input f(x)</Form.Label>
                            <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Row}>    
                            <Form.Label>Input X0</Form.Label>
                            <input type="number" id="XL" onChange={inputX0} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                        </Form.Group>  
                        <Form.Group className="mb-3" as={Row}>  
                            <Form.Label>Input X1</Form.Label>
                            <input type="number" id="XR" onChange={inputX1} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                        </Form.Group>
                        <div className="alignown">
                            <Button variant="dark" onClick={calculateRoot}>
                                Calculate
                            </Button>
                        </div>
                    </Form>
                </div>
                <br></br>
                <h5>Answer = {ans.toPrecision(7)}</h5>
                <Row>{html}</Row>
               
            </Container>
           
    )
}

export default Secant