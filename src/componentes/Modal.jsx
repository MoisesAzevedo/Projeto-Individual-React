/* import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Users from "./paginas/Users";

function Modal_function() {
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
}

export default Modal_function; */
