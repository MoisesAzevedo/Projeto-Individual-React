import React from "react";
import { useState, useEffect } from "react";
import "./Users.css";
import axios from "axios";
import "../../App.css";
import Modal from "react-modal";
import { NumericFormat } from "react-number-format";

const Users = () => {
  /* =========================================================================================== */
  //........................................ Modal
  /* =========================================================================================== */

  const [validInput, setValidInput] = useState("");
  const [requiredField, setRequiredField] = useState("");
  const [validSelect, setValidSelect] = useState("");
  const [userArray, setUserArray] = useState ({})
  const [userArrayFinal, setUserArrayFinal] = useState (false)

  function closeModal() {
    //pega o valor do userArray e joga para userArrayFinal
    setUserArrayFinal(userArray)

    //seta o modal para false
    setUserArray(false);
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

  //Validando o número do cartão
/*   function testNumber(e) {
    console.log("TEST MODAL");

    
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
 */

  const handeSubmit = (e) => {
    e.preventeDefault()
    axios
      .post ('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', {
        card_number: selectChange.card_number,
        cvv: selectChange.cvv,
        expiry_date: selectChange.expiry_date,
      })
  }

  const addPost = data => axios.post("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989", data)
  .then(()=>{
   console.log("post correto")
  })
  .catch(() => {
    console.log("post errado")
  } ) 

  let card =
  // valid card
  {
    card_number: "1111111111111111",
    cvv: "789",
    expiry_date: "01/18",
  };

let invalidCard =
  // valid card
  {
    card_number: "4111111111111234",
    cvv: "123",
    expiry_date: "01/20",
  };

  const validationCard = () => {
    if (selectChange == invalidCard) {
      setRequiredField("Invalid card!");
    }
  };

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
  
  const [modalFinal, setModalFinal] = useState(false);


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
              <button className="botao" onClick={() => setUserArray(usuario)}>
                Pagar
              </button>
            </div>
          </div>
        );
      })}

      {/* {isModalVisible ? <ModalConst /> : null} */}

      <Modal
        isOpen={userArray.name}
        contentLabel="example M<odal"
        overlayclassName="modal-overlay"
        className="modal-content"
      >
        <div className="box-modal">
          <div className="header-modal">
            <header>
              <h2>Pagamento para {userArray.name}</h2>
            </header>
            <button onClick={() => setUserArray(false)}>✖</button>
          </div>
          <br></br>
          <p className="requiredField">{requiredField}</p>

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

            <option value="1111">
              {card.card_number.slice(-4)}
            </option>

            <option value="1234">
              {invalidCard.card_number.slice(-4)}
            </option>
          </select>

          <br />

          <button
            className="btn-modalPag"
            type="submit"
            onClick={() => {
              handeSubmit();
              validationCard();
            }}
          >
            Concluir pagamento
          </button>
        </div>
      </Modal>

      <Modal isOpen={userArrayFinal} id="modalFinal">
        <div className="modalFinal">
          <h2>Pagamento enviado para {userArrayFinal.name}</h2>
          <button className="btn-finalOk" onClick={() => setUserArrayFinal(false)}>
            Ok
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Users;
