import React from "react";
import { useState, useEffect } from "react";
import './Users.css'
import axios from "axios";
import '/Users/Moise/OneDrive/Área de Trabalho/asd/Projeto-Individual-React/src/App.css';

const Users = () => {
  const [usuariosApi, setUsers] = useState([]); 

  useEffect(() => {
    axios
      .get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




  return (
    <>
      {usuariosApi.map((usuario) => {

        const testes = () => {
          console.log('opa')
        }
        
        return(
          <div className="userContainer">
            <img src={usuario.img} alt="" />
            
            <div className="info">
              <h1>{usuario.name}</h1>
              
              <div id="id-and-username">
                <p>ID: {usuario.id}</p>
                <p> - Username: {usuario.username}</p>
              </div>
            </div>

            <div id='pagar' >
              <button className='botao' onClick={testes}> Pagamnt</button>
            </div>
          </div>

          )
      })}

      
    </>
  );

  
}
 
export default Users;

