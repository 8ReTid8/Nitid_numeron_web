import { useState, useEffect } from 'react'
import { Container, Row, Form, Button, Col, FormLabel } from 'react-bootstrap'
import { CiAlarmOn } from 'react-icons/ci';
import axios from 'axios';
export default function InputMulReg({ cal }) {
  const [size, setSize] = useState(3);
  const [sizedata, setsizedata] = useState(4);
  const [matrix, setMatrix] = useState([[0,0,0,0],[0,0,0,0],[0,0,0,0]])
  const [Fx, setFx] = useState([0, 0, 0, 0])
  const [Xfind, setXfind] = useState([0, 0, 0]);
  const [mydata, setmydata] = useState([])

  useEffect(() => {
    axios.get("http://localhost:1987/multiregress").then((res) => setmydata(res.data))
  }, [])

  const datacall = async () => {
    let i = Math.floor((Math.random() * mydata.length))
    setSize(mydata[i].xn)
    setsizedata(mydata[i].sizedata)
    setXfind(JSON.parse(mydata[i].xfind))
    setMatrix(JSON.parse(mydata[i].xmat))
    setFx(JSON.parse(mydata[i].fx));
  }


  const throwinput = () => {
    cal(sizedata, matrix, Fx, Xfind, size)

  }

  console.log(Xfind)

  const handleMatrixChange = (rowIndex, colIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newMatrix = [...matrix];
    newMatrix[rowIndex][colIndex] = newValue;
    setMatrix(newMatrix);
  };
  const handleXfindChange = (rowIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newXfind = [...Xfind];
    newXfind[rowIndex] = newValue;
    setXfind(newXfind);
  };
  const handleFxChange = (rowIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newFx = [...Fx];
    newFx[rowIndex] = newValue;
    setFx(newFx);
  };
  const handleSizeSubmit = () => {
    const newMatrix = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < sizedata; j++) {
        row.push(0);
      }
      newMatrix.push(row);
    }
    setMatrix(newMatrix);
    setFx(new Array(sizedata).fill(0));
    setXfind(new Array(size).fill(0));
  };

  return (
    <Container>
      <div className='alignown'>
        <Form>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label>Input Xn</Form.Label>
            <input type="number" value={size} onChange={(e) => setSize(parseInt(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
            <Form.Label>Input size data</Form.Label>
            <input type="number" value={sizedata} onChange={(e) => setsizedata(parseInt(e.target.value))} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
          </Form.Group>
          <Form.Group className="mb-3" as={Row}>
            <div className="alignown">
              <Button variant="dark" onClick={handleSizeSubmit}>
                Submit
              </Button>
              <Button variant="dark" onClick={datacall}><CiAlarmOn size="25px" /></Button>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" as={Row}>
            <Col>
              <Row>
                {matrix.map((row, rowIndex) => (
                  <Col key={rowIndex}>
                    <div className="text-center" disabled>{"x" + rowIndex}</div>
                    {row.map((cell, colIndex) => (
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
              <div className="text-center" disabled>F(x)</div>
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
            <Form.Label>Input X to find :</Form.Label>
            {Xfind.map((cell, rowIndex) => (
              <Col key={rowIndex} style={{ width: "10%", margin: "0 auto" }}>
                <div className="text-center" disabled>{"x" + rowIndex}</div>
                <Form.Control
                  type="number"
                  value={cell}
                  onChange={(e) => handleXfindChange(rowIndex, e)}
                />
              </Col>
            ))}

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
