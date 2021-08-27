
import { React, useState } from "react";
import NavigationBar from "./components/navigationBar";
import Sesion from "./components/iniciarSesion"
import Footer from "./components/footer";


function App() {
  //declaro esto para manejar lo que se monta y desmonta de la pag
  const [register, setRegister] = useState(false);


  const handleLoginClick = ()=>{
    setRegister(true);
  }

  return (
    <>
        <NavigationBar handleLoginClick={handleLoginClick} register={register}/>

      {!register? (
        <p>Barra de Busqueda</p>
      ) : (
        <>
          <Sesion handleLoginClick={handleLoginClick} register={register} />
        </>
      )}
      <Footer className="d-flex align-items-end" />
    </>
  
  );
}

export default App;
