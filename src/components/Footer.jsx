import React, { Component } from 'react';
import './Footer.css';

const Footer = () => {

    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Pipes &#169; {new Date().getFullYear()}</span>
        </div>
      </footer>
    );

}

export default Footer;