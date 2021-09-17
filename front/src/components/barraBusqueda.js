import  {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'

const BarraBusqueda = ({handlerSearch, busqueda, handlerPubsCheck, pubs}) => {

    return (  
      <>
        <Form className="d-flex justify-content-center mt-5">
          <FormControl type="text" 
            value={busqueda}
            onChange={handlerSearch}
            placeholder="¿Qué estas buscando?" 
            className="mr-xl-2 w-75" />
        </Form>

        <Form inline className="d-flex justify-content-center mt-1 mb-5">
          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Publicaciones" onChange={handlerPubsCheck}/>
          </Form.Group>

          <Link to="/search" clasName="button">Buscar</Link>

        </Form>
      </>);
}
 
export default BarraBusqueda;