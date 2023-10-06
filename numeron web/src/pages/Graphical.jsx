import { useState } from "react"
import { Button, Container, Form, Table,Row} from "react-bootstrap";
import { evaluate } from 'mathjs'

const Graphical =()=>{
        
    const calgraphical=(x0)=>{
        let y = 0
        let iter = 0
        const e = 0.000001
        const MAX = 50
        let obj = {}
        y = evaluate(Equation,{x:x0})
        iter++;
        obj = {iteration:iter,X:x0,Y:y}
        data.push(obj)
        while(y!=0&&iter<MAX){
            x0++;
            let ynew = evaluate(Equation,{x:x0})
            if(y*ynew>0){
                y = ynew;
                iter++;
                obj = {iteration:iter,X:x0,Y:y}
                data.push(obj)
            }
            if(y*ynew<0){
                x0 -= 1;
                while(y<e&&iter<MAX){
                    x0+=0.000001
                    y = evaluate(Equation,{x:x0})
                    iter++;
                    obj = {iteration:iter,X:x0,Y:y}
                    data.push(obj)
                }
                break
            }
        }
        setans(x0)
    }

    const data = []
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(43*x)-180")
    const [ans,setans] = useState(0)
    const [X,setX] = useState(0)
    const inputEquation = (event) =>{
        setEquation(event.target.value)
    }

    const inputX = (event) =>{
        setX(event.target.value)
    }
    const calculateRoot = () =>{
        const xnum = parseFloat(X)
        calgraphical(xnum);
        setHtml(print());
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
                            <th width="45%">Y</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.X}</td>
                                <td>{element.Y}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
           
        );
    }

    return (
        <Container>
            <div className="layout"><h1>Graphical</h1></div>
            <div className="alignown">
                <Form >
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Form.Label>Input X</Form.Label>
                        <input type="number" id="X0" onChange={inputX} style={{width:"100%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <div className="alignown">
                        <Button variant="dark" onClick={calculateRoot}>Calculate</Button>
                    </div>
                </Form>
            </div>
            <br></br>
            <h5>Answer = {ans.toPrecision(7)}</h5>
            
            <Row>{html}</Row>
        </Container>
       
    )
}
export default Graphical