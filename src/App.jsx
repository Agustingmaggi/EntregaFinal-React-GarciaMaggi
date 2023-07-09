import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import NavBarr from './components/NavBarr/NavBarr.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//Pages
import CreaTuProyectoPage from './pages/CreaTuProyectoPage/CreaTuProyecto';
import IngresaPage from './pages/IngresaPage/Ingresa';
import VisionPage from './pages/NuestraVisionPage/Vision';
import RegistratePage from './pages/RegistratePage/Registrate';
import DetailPage from './pages/DetailPage/DetailPage';
import Category from './pages/Category/Category'
import Shop from './pages/ShopPage/ShopPage.jsx'
import CategoriasPage from './pages/CategoriasPage/Categorias.jsx'

function App() {
  {
    return (
      <Router>
        <div>
          {/* <div className='navbar'>
            <NavBar />
          </div> */}
          <div className='navbar'>
            <NavBarr />
          </div>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/CreaTuProyecto" element={<CreaTuProyectoPage />} />
            <Route path="/Ingresa" element={<IngresaPage />} />
            <Route path="/Vision" element={<VisionPage />} />
            <Route path="/Registrate" element={<RegistratePage />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/categorias/:clasificacion" element={<CategoriasPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
