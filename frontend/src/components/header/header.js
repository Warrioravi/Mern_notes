import {Navbar,Nav,NavDropdown,Button, Form, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { logout,} from "../../redux/actions/userActions";

let Header=()=>{

      
    return <Navbar bg="primary" expand="lg">
    <Navbar.Brand href="#">Secrets</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/mynotes">
          <Link to ='/mynotes' > MyNotes</Link>
          </Nav.Link>
        
        <NavDropdown title="Abhishek Kumar" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
          <NavDropdown.Item  href="#action4" onClick={()=>{logout()}}>Logout</NavDropdown.Item>
          
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
 
 
 
 
 }
 export default Header;