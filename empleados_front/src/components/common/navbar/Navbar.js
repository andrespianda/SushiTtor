import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons"
import React, { Component } from "react";
import '../navbar/navbar.css'

export class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Usuario
              </button>
              <ul className="dropdown-menu">
                <li>
                    <div className="dropdown-item" id="icono">
                        <FontAwesomeIcon icon={faUserCircle}/>

                    </div>
                  <a className="dropdown-item" href="/">
                    Cerrar Sesion
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
