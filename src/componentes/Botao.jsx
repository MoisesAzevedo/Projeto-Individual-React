import React, { Component } from "react";
import '../App.css';
import { Link } from "react-router-dom";

export default props => 
<Link to={props.to} class='botao' >
    {props.nome}
</Link>
