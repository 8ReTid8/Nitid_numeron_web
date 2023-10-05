import {Navbar,NavDropdown,Nav,Container} from "react-bootstrap"

function myNavbar() {

    // const navbarStyle = {
    //     color: 'your-font-color',
    // };
    const navLinkStyle = {color: "white"};
    

    return (
      <Navbar expand="lg" variant={"dark"} bg="dark" >
        <Container>
          <Navbar.Brand href="/" style={{color:'white',fontSize:30}} className="setfontsilk">Numeron Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="Root of Equation" id="basic-nav-dropdown"  className="setfontsilk">
                <NavDropdown.Item href="Bisection">Bisection Method</NavDropdown.Item>
                <NavDropdown.Item href="Falseposition">False position Method</NavDropdown.Item>
                <NavDropdown.Item href="Onepoint">One point iteration Method</NavDropdown.Item>
                <NavDropdown.Item href="action/3.4">Newton Raphson</NavDropdown.Item>
                <NavDropdown.Item href="action/3.5">Secant Method</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown"  className="setfontsilk">
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="">
                  {/* Another action */}
                </NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">
                  {/* Separated link */}
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default myNavbar;