import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import BrandBar from './brandBar';


const NavigationBar = ({handleLoginClick, register}) => {

  return ( 
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="">proyecto-pA</Navbar.Brand>

    <Navbar.Collapse className="justify-content-end space-between">
      <Nav>
        <Nav.Link href="#pricing">Conseguir Cliente</Nav.Link>

        <Button variant="primary" onClick={handleLoginClick}>Iniciar Sesion</Button>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
} 
 
export default NavigationBar;