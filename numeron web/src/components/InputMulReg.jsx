import { useState, useEffect } from 'react'
import { Container, Row, Form, Button, Col, FormLabel } from 'react-bootstrap'

export default function InputMatrix({ cal }) {
  const [size, setSize] = useState(3);
  const [sizedata, setsizedata] = useState(4);
  const [sizedataInput, setsizedataInput] = useState(4)
  const [sizeInput, setSizeInput] = useState(3);
  const [matrix, setMatrix] = useState([])
  const [Fx, setFx] = useState(new Array(sizedata).fill(0))
  const [X, setX] = useState([])
  const [M, setm] = useState();
  const [Xfind, setxfind] = useState();


  const throwinput = () => {
    cal(sizedata, matrix, Fx, Xfind, M)

  }

  useEffect(() => {
    const newMatrix = [];

    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < sizedata; j++) {
        row.push(0); // Initialize all cells to 0
      }
      newMatrix.push(row);
    }
    setMatrix(newMatrix);

  }, [size, sizedata]);

  console.log(matrix)

  const handleMatrixChange = (rowIndex, colIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newMatrix = [...matrix];
    newMatrix[rowIndex][colIndex] = newValue;
    setMatrix(newMatrix);
  };


  const handleFxChange = (rowIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newFx = [...Fx];
    newFx[rowIndex] = newValue;
    setFx(newFx);
  };
  const handleSizeSubmit = () => {
    setSize(sizeInput);
    setsizedata(sizedataInput)
    setFx(new Array(sizedataInput).fill(0));
  };

  return (
    <Container>
      <div className='alignown'>
        <Form>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label>Input Xn</Form.Label>
            <input type="number" value={sizeInput} onChange={(e) => setSizeInput(parseInt(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
            <Form.Label>Input size data</Form.Label>
            <input type="number" value={sizedataInput} onChange={(e) => setsizedataInput(parseInt(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
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
              {/* <Form.Label>MATRIX</Form.Label> */}

              <Row>
                {matrix.map((row, rowIndex) => (
                  <Col key={rowIndex}>
                    <div  className="text-center" disabled>{"x" + rowIndex}</div>
                    {row.map((cell, colIndex) => (
                      // <div>gay</div>
                      <Form.Control
                        key={colIndex}
                        type="number"
                        value={cell}
                        onChange={(e) => handleMatrixChange(rowIndex, colIndex, e)}
                        className="matrix-cell"
                      />
                    ))}
                  </Col>
                ))}
              </Row>

            </Col>


            <Col>
              {/* <Form.Label>Fx</Form.Label> */}
              <div  className="text-center" disabled>F(x)</div>
              {Fx.map((cell, rowIndex) => (
                <Row key={rowIndex}>
                  <Form.Control
                    type="number"
                    value={cell}
                    onChange={(e) => handleFxChange(rowIndex, e)}
                  />
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label>Input M</Form.Label>
            <input type="number" value={M} onChange={(e) => setm(parseFloat(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
          </Form.Group>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label>Input X to find</Form.Label>
            <input type="number" value={Xfind} onChange={(e) => setxfind(parseFloat(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
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
