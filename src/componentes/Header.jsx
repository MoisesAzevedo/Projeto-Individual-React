import React, { Component } from "react";
import '../App.css';
import {Link } from 'react-router-dom'

const Header = () => {
    return (
        <Link to="/" className="myHeader">  
            <h1>💰</h1>
            <h1> PagTab</h1>
        </Link >
    )
}; 

export default Header;