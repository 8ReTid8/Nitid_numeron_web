import { useState, useEffect } from 'react'
import { Container, Row, Form, Button, Col, FormLabel } from 'react-bootstrap'

export default function InputMatrix() {
  const [size, setSize] = useState(3);
  const [matrix, setMatrix] = useState([])
  const [B, setB] = useState(new Array(size).fill(0))
  const [X, setX] = useState([])
  // const inputSize = (event) =>{
  //     setsize(event.target.value)
  // }

  useEffect(() => {
    console.log(size)
    if(!(size==null||size==undefined)){
    const newMatrix = [];
    // const newB = [];
    for (let i = 0; i < size; i++) {
      // newB.push(0);
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(0); // Initialize all cells to 0
      }
      newMatrix.push(row);
    }
    setMatrix(newMatrix);
    // setB(newB);
  }
  }, [size]);

  const inputSize = (event) => {
    const newSize = parseInt(event.target.value);
    if(!(newSize==null||newSize==undefined)){
      setSize(()=>{return newSize});
      setB(new Array(newSize).fill(0));
    }
  };

  const handleMatrixChange = (rowIndex, colIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newMatrix = [...matrix];
    newMatrix[rowIndex][colIndex] = newValue;
    setMatrix(newMatrix);
  };
  console.log(size)

  const handleBChange = (rowIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newB = [...B];
    newB[rowIndex] = newValue;
    setB(newB);
  };

  return (
    <Container>
      <div className='alignown'>
        <Form>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label>Input size</Form.Label>
            <input type="number" value={size} onChange={inputSize} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
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
        </Form>
      </div>
    </Container>
  )
}
