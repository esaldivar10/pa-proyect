import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { React, useState } from 'react';


const NavigationBar = ({handleLoginClick, register}) => {
  //esto voy a usar para setear la barra de navegacion del usuario
  const [user, setUser] = useState(''); 

  return ( 
      <Navbar bg="dark" variant="dark">

      <Navbar.Brand href="">proyecto-pA</Navbar.Brand>

      {!register && user=='' ?
      (
        <Nav className="ml-auto">
          {/* <Nav.Link href="/register">Conseguir Cliente</Nav.Link> */}
          <Button className="mx-2" variant="primary">Crear Cuenta</Button>
          <Button variant="primary" onClick={handleLoginClick}>Iniciar Sesion</Button>
        </Nav>

      ):(
        <>
        </>
      )}
    </Navbar>
  );
} 
 
export default NavigationBar;