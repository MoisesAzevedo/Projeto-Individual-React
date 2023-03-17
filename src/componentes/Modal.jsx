/* import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Users from "./paginas/Users";
import { NumericFormat } from "react-number-format"; */

import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import "../../App.css";
import Modal from "react-modal";
import { NumericFormat } from "react-number-format";




const ModalConst = () => {

  const [validInput, setValidInput] = useState("");
const [validSelect, setValidSelect] = useState("");


function inputChange(e) {
  setValidInput(e.target.value);
  console.log(validInput);
}

function selectChange(e) {
  setValidSelect(e.target.value);
  console.log(validSelect);
}
  return (
    
        <div className="box-modal">
          <div className="header-modal">
            <header>
              <h2>Pagamento para {/* {nameUser} */}</h2>
            </header>
            <button /* onClick={closeModal} */>✖</button>
          </div>
          <br></br>
          <p className="requiredField">{/* {requiredField} */}</p>

          <NumericFormat
            className="modal-input"
            type="text"
            placeholder="R$ 0,00"
            decimalSeparator=","
            thousandSeparator={"."}
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
            /* onClick={() => testModal()} */
          >
            Concluir pagamento
          </button>
        </div>
  )
}

export default ModalConst;
