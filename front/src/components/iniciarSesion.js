import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react";


const Sesion = ({handleLoginClick, register}) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handlerPwChange = (event)=>{
    setPw(event.target.value);
  }

  const handlerEmailChange = (event)=>{
    setEmail(event.target.value);

  }

  const handleAcceptClick = async ()=>{

    //creo un objeto con los estados
    const loginData = {
      email, 
      pw,
    };

    //declaro a la url q necesito que viajen 
    const url='http://localhost:8000/';

    //los envio a traves del fecth con metodo POST
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {'Content-Type': 'application/json'},
    })

    //despues verifico que el mensaje se envio satisfactoriamente
    const dataJson = await response.json();
    if (response.status == 200) {
      console.log(dataJson);
      
    }else{
      console.log('No estaria');
    }

  }

  const handlerCancelClick = () =>{
    handleLoginClick();
  }


  return (
    <Form className="mx-auto my-3 w-50">
      <Form.Group >
        <Form.Label>Email</Form.Label>
        <Form.Control 
          value={email}
          onChange={handlerEmailChange}
          type="email" 
          placeholder="email" />

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
      <div class="d-flex justify-content-between"> 
        <Button  onclick={handlerCancelClick} variant="secondary" type="submit">
          Cancelar
        </Button>
        <Button onClick={handleAcceptClick} variant="primary" type="submit">
          Aceptar
        </Button>
      </div>

    </Form>
  );
};

export default Sesion;
