import React from "react";
import { useState, useEffect } from "react";
import "./Users.css";
import axios from "axios";
import "/Users/Moise/OneDrive/Área de Trabalho/asd/Projeto-Individual-React/src/App.css";
import Modal from "react-modal";
import { json } from "react-router-dom";

const Users = () => {
  /* =========================================================================================== */
  //........................................ Modal
  /* =========================================================================================== */
  const [modalIsOpen, setIsOpen] = useState(false); //Verifica se o modal está aberto

  function openModal(i) {
    console.log("openModal " + i);
    localStorage.setItem("name", JSON.stringify(i));

    //seta o modal para true
    console.log("Testando Open");
    setIsOpen(true);
  }

  function closeModal() {
    //seta o modal para false
    setIsOpen(false);
    console.log("teste close");
  }
  /* =========================================================================================== */

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

  const nameUser0 = localStorage.getItem("name");
  const nameUser = JSON.parse(nameUser0);

  return (
    <>
      {usuariosApi.map((usuario) => {
        var indice = usuario.name;

        return (
          <div className="userContainer">
            <img src={usuario.img} alt="" />

            <div className="info">
              <h1>{usuario.name}</h1>

              <div id="id-and-username">
                <p>ID: {usuario.id}</p>
                <p> - Username: {usuario.username}</p>
              </div>
            </div>

            <div id="pagar">
              <button className="botao" onClick={() => openModal(usuario.name)}>
                {indice}
              </button>
            </div>
          </div>
        );
      })}

      <Modal
        isOpen={modalIsOpen}
        contentLabel="example M<odal"
        overlayclassName="modal-overlay"
        className="modal-content"
      >
        <div className="box-modal">
          <div className="header-modal">
            <header>
              <h2>Pagamento para {nameUser}</h2>
            </header>
            <button onClick={closeModal}>✖</button>
          </div>

          <br />

          <input type="text" />
          <input type="select" />

          <br />

          <button className="btn-modalPag">Concluir pagamento</button>
        </div>
      </Modal>
    </>
  );
};

export default Users;
