import { Navbar,Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsCart } from "react-icons/bs";

const NavbarComp = () => {



    return (
        <div><Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {/* <Nav.Link as={Link} to="/product-details/:id">ProductDetails</Nav.Link> */}
              <Nav.Link as={Link} to="/cart">Cart-<BsCart fontSize="1.4rem"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
            
        </div>
    )
}

export default NavbarComp
