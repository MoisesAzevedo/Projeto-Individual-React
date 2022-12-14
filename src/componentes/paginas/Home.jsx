import React, { Component } from "react";
import '/Users/Moise/Desktop/Eu/Programming/Projeto individual - React/Projeto individual React/projeto-react/src/App.css';
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

            <Link to="/cards" className="btn">
                <form /* onSubmit={} */ id='menu-usuarios'>
                    <Botao nome='Cartões'/>  {/* imitar o MenuButton de Victor */}
                </form>
            </Link>
        </div>

    );
}

export default Home;