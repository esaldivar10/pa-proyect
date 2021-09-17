import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavigationBar = ({handleLoginClick, register, user, prof, handlerCloseSesionClick}) => {
 

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
        {(user && register && !prof) &&
         <NavDropdown className="ml-auto" title={user} alignRight>
          <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Mis publicaciones</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Historial</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4" 
            onClick={handlerCloseSesionClick}>Cerrar Sesion</NavDropdown.Item>
        </NavDropdown>}
        {(user && register && prof) && 
        <NavDropdown className="ml-auto" title={user} alignRight>
           <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">Contactos</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Historial</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4" onClick={handlerCloseSesionClick}
            >Cerrar Sesion</NavDropdown.Item>
        </NavDropdown>}
    </Navbar>
  );
} 
 
export default NavigationBar;