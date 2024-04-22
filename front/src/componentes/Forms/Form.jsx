import React, { useState } from "react";
//import style from './Form.module.css';
//import imageCircle from '../Images/circlelock.png'
//import rickCreate from '../Images/rickCreate.png'
import axios from "axios";

const Form = ({ props }) => {
   const [userData, setUserData ] = useState ({
    email:"",
    password:""
   });
   const [ errors, setErrors ] = useState ({
        email: "ingrese su email",
        password:"Ingrese su password"
   });
   const handleChange = (event) => {
    const { name , value }  = event.target;
    setUserData({
        ...userData,
        [name]: value
    });
    setErrors(validation({
        ...userData,
        [name]: value
    }));
   };
   const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);    
};
return (
    <div>
      <img
        src={banner}
        style={{width:"300px"}}
        alt=""
      />

      <form onSubmit={handleSubmit} >

        <label>Email: </label>
        <input
          type="text"
          key="email"
          name="email"
          value={userData.email}
          placeholder="Ingresar email..."
          onChange={handleChange}
        />
        <p style={{color:"coral"}}>{ errors.email ? errors.email : null }</p>

        <label>Password: </label>
        <input
          type="password"
          key="password"
          name="password"
          value={userData.password}
          placeholder="Ingresar password..."
          onChange={handleChange}
        />
        <p style={{color:"coral"}}>{ errors.password && errors.password }</p>
        <hr />

        <button
          type="submit"
          disabled={ errors.email || errors.password }
        >Enviar</button>

      </form>
    </div>
  );

}

export default Form;