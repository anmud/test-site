import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/vectorpaint.png'

const  Navbar = () => {
 
    return (
    //   <nav className="navbar navbar-toggleable-md">
    //     <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="container">
    //       <Link className="navbar-brand" to="/">Pipes</Link>
    //       <div className="collapse navbar-collapse" id="navbarCollapse">
    //         <ul className="navbar-nav ml-auto">
    //           <li className="nav-item active">
    //             <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/about">About</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/contact">Contact</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>

    
    <div>
        <nav className="navbar navbar-expand-lg navbar-light  bg-light navbar-toggleable-md">
         <img src={logo} width="45px" height="45px" alt="Logo"></img>
        <Link className="navbar-brand" id="brand" to="/"> pipes</Link>
       <div className="collapse navbar-collapse" id="navbarCollapse">
       <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
       </div>
       
       
        </nav>
    
  </div>
    );
  
}

export default Navbar;