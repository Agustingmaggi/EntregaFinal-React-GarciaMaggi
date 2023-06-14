import React from 'react';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import NavBar from './components/NavBar/NavBar.jsx'
import Cards from './components/ItemListContainer/ItemListContainer';

//Pages
import CreaTuProyectoPage from './pages/CreaTuProyectoPage/CreaTuProyecto';
import IngresaPage from './pages/IngresaPage/Ingresa';
import VisionPage from './pages/NuestraVisionPage/Vision';
import RegistratePage from './pages/RegistratePage/Registrate';
import DetailPage from './pages/DetailPage/DetailPage';
import Category from './pages/Category/Category'

function App() {
  {
    return (
      <Router>
        <div>
          <div className='navbar'>
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/CreaTuProyecto" element={<CreaTuProyectoPage />} />
            <Route path="/Ingresa" element={<IngresaPage />} />
            <Route path="/Vision" element={<VisionPage />} />
            <Route path="/Registrate" element={<RegistratePage />} />
            <Route path="/item/:id" element={<DetailPage />} />
            <Route path="/category/:categoryId" element={<Category />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
