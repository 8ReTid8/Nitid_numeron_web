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
                <NavDropdown.Item href="Graphical">Graphical Method</NavDropdown.Item>
                <NavDropdown.Item href="Bisection">Bisection Method</NavDropdown.Item>
                <NavDropdown.Item href="Falseposition">False position Method</NavDropdown.Item>
                <NavDropdown.Item href="Onepoint">One point iteration Method</NavDropdown.Item>
                <NavDropdown.Item href="Newton Raphson">Newton Raphson Method</NavDropdown.Item>
                <NavDropdown.Item href="Secant">Secant Method</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Linear Algebra" id="basic-nav-dropdown"  className="setfontsilk">
                <NavDropdown.Item href="Cramer">Cramer Rule</NavDropdown.Item>
                <NavDropdown.Item href="GaussElimination">Gauss Elimination</NavDropdown.Item>
                <NavDropdown.Item href="GaussJordan">Gauss Jordan</NavDropdown.Item>
                <NavDropdown.Item href="MatrixInversion">Matrix Inversion</NavDropdown.Item>
                <NavDropdown.Item href="LU">LU Decomposition</NavDropdown.Item>
                <NavDropdown.Item href="Jacobi">Jacobi iteration</NavDropdown.Item>
                <NavDropdown.Item href="GaussSeidel">Gauss-Seidel iteration</NavDropdown.Item>
                <NavDropdown.Item href="Conjugate">Conjugate Gradient</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Interpolation and Extrapolation" id="basic-nav-dropdown"  className="setfontsilk">
                <NavDropdown.Item href="NewtonDivided">Newton Divided</NavDropdown.Item>
                <NavDropdown.Item href="Lagrange">Lagrange</NavDropdown.Item>
                <NavDropdown.Item href="Spline">Spline</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Regression" id="basic-nav-dropdown"  className="setfontsilk">
                <NavDropdown.Item href="LinearRegression">Linear Regression</NavDropdown.Item>
                <NavDropdown.Item href="Lagrange">Lagrange</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Interpolation and Differentiation" id="basic-nav-dropdown"  className="setfontsilk">
                <NavDropdown.Item href="CompositeTrapzoidal">Composite Trapzoidal</NavDropdown.Item>
                <NavDropdown.Item href="CompositeSimpson">Composite Simpson</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default myNavbar;