import React from "react";
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './paginas/Home'
import Users from "./paginas/Users.jsx";

function Rotas(){
    return (
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </Router>
    
    );
     
}

export default Rotas;
