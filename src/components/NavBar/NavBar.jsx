import React from 'react'
import '../../public/css/NavBar.css'
import CardWidget from '../CardWidget/CardWidget.jsx'

const NavBar = () => {
  return (
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Go Fund Them!</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href='#'>Nuestra Visión</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Crea tu Proyecto</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Ingresa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Registrate</a>
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