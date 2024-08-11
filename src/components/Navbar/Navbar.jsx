import React from 'react';
import CompanyLogo from "../../assets/logo.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={CompanyLogo} alt="company-logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span style={{color:'white'}} className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Our Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Our Company</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Gallery</a>
                    </li>
                    <li classNames="nav-item">
                        <a className="nav-link" href="/">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar