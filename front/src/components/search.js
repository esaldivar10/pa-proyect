import PubsCards from './pubsCards';
import ProfesionalCard from './profesionalCards';
import BarraBusqueda from './barraBusqueda';

const Search = ({handlerSearch, busqueda, handlerPubsCheck, pubs}) => {
    return (
        <>
        <BarraBusqueda/>
        {pubs && 
        <p>aca voy a renderizar publicaciones de gente que busca Profesionales</p>}
        
        {!pubs && 
        <ProfesionalCard/>}
        </>);
}
 
export default Search;