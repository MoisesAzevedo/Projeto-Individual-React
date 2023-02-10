import React from "react";
import { useState, useEffect } from "react";
import "./Users.css";
import axios from "axios";
import "/Users/Moise/OneDrive/Área de Trabalho/asd/Projeto-Individual-React/src/App.css";
import Modal from "react-modal";
import { NumericFormat } from "react-number-format";
import ModalFinal from "../ModalFinal";

const Users = () => {
  /* =========================================================================================== */
  //........................................ Modal
  /* =========================================================================================== */
  const [modalIsOpen, setIsOpen] = useState(false); //Verifica se o modal está aberto
  const [validInput, setValidInput] = useState("");
  const [requiredField, setRequiredField] = useState("");
  const [validSelect, setValidSelect] = useState("");
  const [modalFinal, setModalFinal] = useState(false);

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

    setValidInput(null);
  }

  function inputChange(e) {
    setValidInput(e.target.value);
    console.log(validInput);
  }

  function selectChange(e) {
    setValidSelect(e.target.value);
    console.log(validSelect);
  }

  function testModal(e) {
    console.log("TEST MODAL");

    //testando o campo NumericFormat
    if (validInput == 0 || validInput == null) {
      setRequiredField("Digite o valor!");
    } else {
      setRequiredField("");

      if (validSelect != 2123) {
        setRequiredField("Cartão inválido");
      } else {
        console.log(validInput);
        setRequiredField("");
        setValidSelect("");
        closeModal();
        setModalFinal(true);
      }
    }
    //------------------------------
  }

  //Close modal final
  function modalFinalClose() {
    setModalFinal(false);
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
                Pagar
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
          <br></br>
          <p className="requiredField">{requiredField}</p>

          <NumericFormat
            className="modal-input"
            type="text"
            placeholder="R$ 0,00"
            thousandSeparator={true}
            prefix={"R$ "}
            inputMode="numeric"
            value={validInput}
            onChange={inputChange}
          />
          <select className="modal-select" required onChange={selectChange}>
            <option value="Selecione" disabled selected>
              Selecione os 04 últimos digitos do cartão
            </option>
            <option value="0123">Cartão com final 0123</option>
            <option value="2123">Cartão com final 2123</option>
          </select>

          <br />

          <button
            className="btn-modalPag"
            type="submit"
            onClick={() => testModal()}
          >
            Concluir pagamento
          </button>
        </div>
      </Modal>

      <Modal isOpen={modalFinal} id="modalFinal">
        <div className="modalFinal">
          <h2>Pagamento enviado para {nameUser}</h2>
          <button className="btn-finalOk" onClick={modalFinalClose}>
            Ok
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Users;
