import Form from "react-bootstrap/Form"
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Swal from 'sweetalert2'


const Sesion = ({handleLoginClick, register, handlerLoginSuccess}) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  
  const handlerPwChange = (event)=>{
    setPw(event.target.value);
  }
  
  const handlerEmailChange = (event)=>{
    setEmail(event.target.value);
  }
  
  const handlerCancelClick = () =>{
    handleLoginClick();
  }

  const handleAcceptClick = async ()=>{

    //creo un objeto con los estados
    const loginData = {
      email, 
      pw,
    };

    //declaro a la url q necesito que viajen 
    const url = 'http://localhost:8000/auth';

    //los envio a traves del fecth con metodo POST
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    })

    //despues verifico que el mensaje se envio satisfactoriamente
    const dataJson = await response.json();
    if (response.status === 200) {
      handlerLoginSuccess(dataJson.data);
      console.log(dataJson);

      Swal.fire({
        position: 'top-end',
        // icon: 'success',
        title: `Bienvende ${dataJson.data}`,
        showConfirmButton: false,
        // timer: 1500
      })
      
    }else{

      handleLoginClick();      

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${dataJson.message}`,
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }
  

  return (
    <Form className="mx-auto my-3 w-50">
      <Form.Group >
        <Form.Label>Email</Form.Label>
        <Form.Control value={email} onChange={handlerEmailChange} type="email" placeholder="Email"/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
          value={pw}
          onChange={handlerPwChange}
          type="password" 
          placeholder="Password" />
        <Form.Text className="text-muted">
          La constraseña tiene que tener entre 8 y 12 caracteres.
        </Form.Text>
      </Form.Group>

      <div className="d-flex justify-content-between"> 
        <Link className="btn btn-secondary" to="/" onClick={handlerCancelClick}>
          Cancelar
        </Link>

        {/* hay que agregarle el submit por un tema semantico */}
        <Link className="btn btn-primary" onClick={handleAcceptClick} to="/"> 
          Aceptar
        </Link>

        {/* <Button onClick={handleAcceptClick} variant="primary">
          Aceptar
        </Button> */}
      </div>

    </Form>
  );
};

export default Sesion;
