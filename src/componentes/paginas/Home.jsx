import React, { Component } from "react";
import '/Users/Moise/OneDrive/Área de Trabalho/asd/Projeto-Individual-React/src/App.css';
import Botao from '../Botao'
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <Link to="users" className="btn">
                <form /* onSubmit={} */ id='menu-usuarios'>
                    <Botao nome='Usuários'/>
                </form>
            </Link>
        </div>

    );
}

export default Home;