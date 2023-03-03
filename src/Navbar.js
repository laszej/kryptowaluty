import React from 'react';
import Bitcoin from './bitcoin.svg'


import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom" >
      <div className="container-fluid">
        <img src={Bitcoin} width={64} height={64} alt="bitcoin"/>
        <h2 className="navbar-brand" style={{marginLeft: "1rem"}}>Kryptowaluty</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ml-auto" style={{marginLeft: "auto"}}>
            <Link to="/" className="nav-item nav-link">
              Strona główna
            </Link>
            <Link to="/coins" className="nav-item nav-link">
              Kryptowaluty online
            </Link>
           
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar