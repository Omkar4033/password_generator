import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
import 'font-awesome/css/font-awesome.min.css';



const Nav = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="secondary" variant="dark">
      <div>
      <Button variant="secondary" onClick={handleShow}>
        <MenuIcon/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      </div>
        <Container>
          <Navbar.Brand href="#home">
           <LockOpenIcon/>
            Password Generator
          </Navbar.Brand>
        </Container>
      </Navbar>

  )
}

export default Nav