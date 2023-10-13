import { useState, useEffect } from 'react'
import { Container, Row, Form, Button, Col, FormLabel } from 'react-bootstrap'

export default function InputMatrix({cal}) {
  const [size, setSize] = useState(3);
  const [sizeInput, setSizeInput] = useState(3);
  const [matrix, setMatrix] = useState([])
  const [B, setB] = useState(new Array(size).fill(0))
  const [X, setX] = useState([])

  const throwinput=()=>{
    cal(size,matrix,B)

  }

  useEffect(() => {
    const newMatrix = [];
   
    for (let i = 0; i < size; i++) {
    
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(0); // Initialize all cells to 0
      }
      newMatrix.push(row);
    }
    setMatrix(newMatrix);
    
  }, [size]);

  // const inputSize = (event) => {
  //   const newSize = parseInt(event.target.value);
  //   setSize(newSize);
  //   setB(new Array(newSize).fill(0));
  // };

  const handleMatrixChange = (rowIndex, colIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newMatrix = [...matrix];
    newMatrix[rowIndex][colIndex] = newValue;
    setMatrix(newMatrix);
  };


  const handleBChange = (rowIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newB = [...B];
    newB[rowIndex] = newValue;
    setB(newB);
  };
  const handleSizeSubmit = () => {
    setSize(sizeInput);
    setB(new Array(sizeInput).fill(0));
  };

  return (
    <Container>
      <div className='alignown'>
        <Form>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label>Input size</Form.Label>
            <input type="number" value={sizeInput} onChange={(e) => setSizeInput(parseInt(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
          </Form.Group>
          <Form.Group className="mb-3" as={Row}>
            <div className="alignown">
              <Button variant="dark" onClick={handleSizeSubmit}>
                  Submit
              </Button>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" as={Row}>
            <Col>
              <Form.Label>MATRIX</Form.Label>
              {matrix.map((row, rowIndex) => (
                <Row key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <Col key={colIndex}>
                      <Form.Control
                        type="number"
                        value={cell}
                        onChange={(e) => handleMatrixChange(rowIndex, colIndex, e)}
                        className="matrix-cell"
                      />
                    </Col>
                  ))}
                </Row>
              ))}
            </Col>
           
            <Col>
              <Form.Label>X</Form.Label>
              {B.map((cell, rowIndex) => (
                <Row key={rowIndex}>
                  <Form.Control
                    value= {`X${rowIndex}`}
                    disabled
                  />
                </Row>
              ))}
            </Col>

            <Col>
              <Form.Label>B</Form.Label>
              {B.map((cell, rowIndex) => (
                <Row key={rowIndex}>
                  <Form.Control
                    type="number"
                    value={cell}
                    onChange={(e) => handleBChange(rowIndex, e)}
                  />
                </Row>
              ))}
            </Col>
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
