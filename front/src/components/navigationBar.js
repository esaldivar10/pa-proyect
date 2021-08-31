import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = ({handleLoginClick, register, user}) => {

  return ( 
    <Navbar bg="dark" variant="dark">
      <Link className="navbar-brand" to="/"
      onClick={handleLoginClick}>proyecto-PA</Link>

      {!register ?(
       <Nav className="ml-auto">
          <Link className="btn btn-primary mx-2" to="">Crear Cuenta</Link>
          <Link 
            className="btn btn-primary" 
            to="/register" 
            onClick={handleLoginClick}>
          Iniciar Sesion
          </Link>
        </Nav>): (
          <></>
        )}
        {(user && register) &&
         <NavDropdown className="ml-auto" title={user} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Cerrar Sesion</NavDropdown.Item>
        </NavDropdown>}
    </Navbar>
  );
} 
 
export default NavigationBar;