import React, { Component } from "react";
import '../../App.css';
import Botao from '../Botao'
/* import { Link } from "react-router-dom";
 */

function Home() {
    return (
        <div>
            <div className="btn">
                <div id='menu-usuarios'>
                    <Botao nome='Usuários' to='users'/>
                </div>
            </div>
        </div>

    );
}

export default Home;