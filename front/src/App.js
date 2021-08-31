
import { React, useState } from "react";
import NavigationBar from "./components/navigationBar";
import Sesion from "./components/iniciarSesion"
import Footer from "./components/footer";
import BarraBusqueda from "./components/barraBusqueda";

import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  //declaro esto para manejar lo que se monta y desmonta de la pag
  const [register, setRegister] = useState(false);
  //esto voy a usar para setear la barra de navegacion del usuario
  const [user, setUser] = useState('');

  const handleLoginClick = ()=>{
    setRegister(!register);
  }

  const handlerLoginSuccess = (userData)=>{
    setUser(userData);
  }

  return (
    <BrowserRouter>
      <NavigationBar handleLoginClick={handleLoginClick} register={register} user={user}/>

      <Switch>
        <Route exact path="/">
          <BarraBusqueda/>
        </Route>

        <Route path="/register">
          <Sesion 
            handleLoginClick={handleLoginClick} 
            register={register}
            handlerLoginSuccess={handlerLoginSuccess}/>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  
  );
}

export default App;
