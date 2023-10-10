import { useState } from "react"
import { Button, Container, Form, Table,Row } from "react-bootstrap";
import { evaluate,derivative } from 'mathjs'

const NewtonRaphson =()=>{
    const print = () =>{
        console.log(data)
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead align="center">
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="45%">X</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.X}</td>
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
            obj = {iteration:iter,X:x}
            data.push(obj)
        }while(error(xold,x)>e && iter<MAX)
        setans(x)
    }

    const data =[];
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^2)-7")
    const [ans,setans] = useState(0)
    const [X0,setX0] = useState(0)
    

    const inputEquation = (event) =>{
        setEquation(event.target.value)
    }

    const inputX0 = (event) =>{
        setX0(event.target.value)
    }


    const calculateRoot = () =>{
        const x0num = parseFloat(X0)
        Calnewton(x0num);
        setHtml(print());
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
                            <input type="number" id="XL" onChange={inputX0} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
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

export default NewtonRaphson