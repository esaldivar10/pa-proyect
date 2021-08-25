import { useState } from "react";
import NavigationBar from "./components/navigationBar";
import Sesion from "./components/iniciarSesion"
import BrandBar from "./components/brandBar"


import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  //declaro esto para manejar lo que se monta y desmonta de la pag
  const [register, setRegister] = useState(false);

  const handleLoginClick = ()=>{
    setRegister(!register);
  }

  return (
    <>
      {register ? (
        <NavigationBar handleLoginClick={handleLoginClick} register={register}/>

      ) : (
        <>
          <BrandBar handleLoginClick={handleLoginClick} register={register}/>
          <Sesion/>
        </>
      )}

    </>
  
  );
}

export default App;
