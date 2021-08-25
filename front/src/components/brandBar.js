import Navbar from "react-bootstrap/Navbar"

const BrandBar = ({handleLoginClick, register}) => {
    return (  
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick={handleLoginClick}>proyecto-pA</Navbar.Brand>
        </Navbar>
    );
}
 
export default BrandBar;