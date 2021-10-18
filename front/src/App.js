import React, { useState } from "react";
import NavigationBar from "./components/navigationBar";
import Sesion from "./components/iniciarSesion"
import Footer from "./components/footer";
import BarraBusqueda from "./components/barraBusqueda";
import Search from "./components/search";
import './style.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  //declaro esto para manejar lo que se monta y desmonta de la pag
  const [register, setRegister] = useState(false);
  //esto voy a usar para setear la barra de navegacion del usuario
  const [user, setUser] = useState('');
  const [prof, setProf] = useState(false);
  const [busqueda, setBusqueda]= useState('');
  const [pubs, setPubs] = useState(false);

  
  const handlerPubsCheck = () => {
    setPubs(true);
    // alert(`ahora voy a buscar pubs? ${pubs}`);
  }


  const handlerSearch = (event) => {
    setBusqueda(event.target.value);    
  }

  const handleLoginClick = ()=>{
    setRegister(!register);
  }

  const handlerLoginSuccess = (userData)=>{
    setUser(userData);
  }

  const handlerCloseSesionClick = ()=>{
    handleLoginClick();
    setUser('');
  }

  const handlerProfesionalUser =(profesion)=>{
    console.log(profesion);
    
    if (profesion===8) {
      setProf(false);
      
    } else {
      setProf(true);      
    }
  }

  return (
    <BrowserRouter>
      <NavigationBar 
        handleLoginClick={handleLoginClick} 
        register={register} 
        user={user}
        prof={prof}
        handlerCloseSesionClick={handlerCloseSesionClick}/>

      <Switch>
        <Route exact path="/">
          <BarraBusqueda 
            handlerSearch={handlerSearch} 
            busqueda={busqueda}
            handlerPubsCheck={handlerPubsCheck}
            pubs={pubs}/>
        </Route>

        <Route path="/register">
          <Sesion 
            handleLoginClick={handleLoginClick} 
            register={register}
            handlerLoginSuccess={handlerLoginSuccess}
            prof={prof}
            handlerProfesionalUser={handlerProfesionalUser}/>
        </Route>

        <Route path="/search">

          <Search 
            handlerSearch={handlerSearch} 
            busqueda={busqueda}
            handlerPubsCheck={handlerPubsCheck}
            pubs={pubs}
          />
          
        </Route>
      </Switch>
      <Footer className="footer"/>
    </BrowserRouter>
  
  );
}

export default App;
