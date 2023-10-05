import { useState } from "react"
import { Button, Container, Form, Table,Row } from "react-bootstrap";
import { evaluate } from 'mathjs'

const FalsePosition =()=>{
    const print = () =>{
        console.log(data)
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">X</th>
                            <th width="30%">XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
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

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const Calbisection = (xl, xr) => {
        var x1,fX1,fXr,fXl,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        do
        {
            scope = {x:xr}
            fXr = evaluate(Equation, scope)

            scope = {x:xl}
            fXl = evaluate(Equation, scope)

            x1 = (xl*fXr-xr*fXl)/(fXr-fXl);

            scope = {x:x1}
            fX1 = evaluate(Equation, scope)
            iter ++;
            if (fX1*fXr > 0)
            {
                ea = error(xr, x1);
                obj = {iteration:iter,Xl:xl,X:x1,Xr:xr}
                data.push(obj)
                xr = x1;
            }
            else if (fX1*fXr < 0)
            {
                ea = error(xl, x1);
                obj = {iteration:iter,Xl:xl,X:x1,Xr:xr}
                data.push(obj)
                xl = x1;
            }
        }while(ea>e && iter<MAX)
        setans(x1)
    }

    const data =[];
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^4)-13")
    const [ans,setans] = useState(0)
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)

    const inputEquation = (event) =>{
        setEquation(event.target.value)
    }

    const inputXL = (event) =>{
        setXL(event.target.value)
    }

    const inputXR = (event) =>{
        setXR(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        Calbisection(xlnum,xrnum);
     
        setHtml(print());
    }

    return (
            <Container>
                <div className="layout"><h1>False position</h1></div>
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
                        </div>
                    </Form>
                </div>
                <br></br>
                <h5>Answer = {ans.toPrecision(7)}</h5>
                <Row>{html}</Row>
               
            </Container>
           
    )
}

export default FalsePosition