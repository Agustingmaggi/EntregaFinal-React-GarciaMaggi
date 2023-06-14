import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget.jsx'
import { Link } from "react-router-dom"
import BasicSelect from '../BasicSelect/BasicSelect.jsx';

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Go Fund Them!</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/vision">Nuestra Visión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="CreaTuProyecto">Crea tu Proyecto</Link>
            </li>
            <BasicSelect />
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="Ingresa">Ingresa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Registrate">Registrate</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='cardwidget'>
        <CardWidget />
      </div>
    </nav>
  )
}

export default NavBar