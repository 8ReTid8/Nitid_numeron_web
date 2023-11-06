import React, { Component } from 'react';
import { Container, Row, Form, Button, Col, FormLabel } from 'react-bootstrap';
import { CiAlarmOn } from 'react-icons/ci';
import axios from 'axios';

class InputMulReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 3,
      sizedata: 4,
      matrix: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      Fx: [0, 0, 0, 0],
      Xfind: [0, 0, 0],
      mydata: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:1987/multiregress").then((res) => this.setState({ mydata: res.data }));
  }

  datacall = async () => {
    let i = Math.floor((Math.random() * this.state.mydata.length));
    this.setState({
      size: this.state.mydata[i].xn,
      sizedata: this.state.mydata[i].sizedata,
      Xfind: JSON.parse(this.state.mydata[i].xfind),
      matrix: JSON.parse(this.state.mydata[i].xmat),
      Fx: JSON.parse(this.state.mydata[i].fx),
    });
  };

  throwinput = () => {
    this.props.cal(this.state.sizedata, this.state.matrix, this.state.Fx, this.state.Xfind, this.state.size);
  }

  handleMatrixChange = (rowIndex, colIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newMatrix = [...this.state.matrix];
    newMatrix[rowIndex][colIndex] = newValue;
    this.setState({ matrix: newMatrix });
  };

  handleXfindChange = (rowIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newXfind = [...this.state.Xfind];
    newXfind[rowIndex] = newValue;
    this.setState({ Xfind: newXfind });
  };

  handleFxChange = (rowIndex, event) => {
    const newValue = parseFloat(event.target.value);
    const newFx = [...this.state.Fx];
    newFx[rowIndex] = newValue;
    this.setState({ Fx: newFx });
  };

  handleSizeSubmit = () => {
    const newMatrix = [];
    for (let i = 0; i < this.state.size; i++) {
      const row = [];
      for (let j = 0; j < this.state.sizedata; j++) {
        row.push(0);
      }
      newMatrix.push(row);
    }
    this.setState({
      matrix: newMatrix,
      Fx: new Array(this.state.sizedata).fill(0),
      Xfind: new Array(this.state.size).fill(0),
    });
  };

  render() {
    return (
      <Container>
        <div className='alignown'>
          <Form>
            <Form.Group className="mb-3" as={Row}>
              <Form.Label>Input Xn</Form.Label>
              <input type="number" value={this.state.size} onChange={(e) => this.setState({ size: parseInt(e.target.value) })} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
              <Form.Label>Input size data</Form.Label>
              <input type="number" value={this.state.sizedata} onChange={(e) => this.setState({ sizedata: parseInt(e.target.value) })} style={{ width: "100%", margin: "0 auto" }} className="form-control"></input>
            </Form.Group>
            <Form.Group className="mb-3" as={Row}>
              <div className="alignown">
                <Button variant="dark" onClick={this.handleSizeSubmit}>
                  Submit
                </Button>
                <Button variant="dark" onClick={this.datacall}><CiAlarmOn size="25px" /></Button>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" as={Row}>
              <Col>
                <Row>
                  {this.state.matrix.map((row, rowIndex) => (
                    <Col key={rowIndex}>
                      <div className="text-center" disabled>{"x" + rowIndex}</div>
                      {row.map((cell, colIndex) => (
                        <Form.Control
                          key={colIndex}
                          type="number"
                          value={cell}
                          onChange={(e) => this.handleMatrixChange(rowIndex, colIndex, e)}
                          className="matrix-cell"
                        />
                      ))}
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col>
                <div className="text-center" disabled>F(x)</div>
                {this.state.Fx.map((cell, rowIndex) => (
                  <Row key={rowIndex}>
                    <Form.Control
                      type="number"
                      value={cell}
                      onChange={(e) => this.handleFxChange(rowIndex, e)}
                    />
                  </Row>
                ))}
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" as={Row}>
              <Form.Label>Input X to find :</Form.Label>
              {this.state.Xfind.map((cell, rowIndex) => (
                <Col key={rowIndex} style={{ width: "10%", margin: "0 auto" }}>
                  <div className="text-center" disabled>{"x" + rowIndex}</div>
                  <Form.Control
                    type="number"
                    value={cell}
                    onChange={(e) => this.handleXfindChange(rowIndex, e)}
                  />
                </Col>
              ))}
            </Form.Group>
            <Form.Group className="mb-3" as={Row}>
              <div className="alignown">
                <Button variant="dark" onClick={this.throwinput}>
                  Calculate
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </Container>
    );
  }
}

export default InputMulReg;
