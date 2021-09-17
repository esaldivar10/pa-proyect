import Button from 'react-bootstrap/esm/Button';
import Media from 'react-bootstrap/Media';

const ProfesionalCard = () => {
    return ( 
    <Media>
        <img
            width={70}
            height={20}
            className="mr-3"
            src="holder.js/64x64"
            alt="img"
            />
        <Media.Body>
            <h5>electricista</h5>
            <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
            </p>
            <Button className="bnt-primary">Contactar</Button>
        </Media.Body>
    </Media>
     );
}
 
export default ProfesionalCard;