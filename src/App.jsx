import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Context
import { ProductoProvider } from "./context/ProductosContext"

//Components
import NavBarr from './components/NavBarr/NavBarr.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from "./components/Cart/Cart"

//Pages
import DetailPage from './pages/DetailPage/DetailPage';
import ShopPage from './pages/ShopPage/ShopPage.jsx'
import CategoriasPage from './pages/CategoriasPage/Categorias.jsx'
import About from './pages/about/about.jsx'
import Contact from './pages/Contact/Contact.jsx'

function App() {
  {
    return (
      <ProductoProvider>
        <Router>
          <div>
            <div className='navbar'>
              <NavBarr />
            </div>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/Shop" element={<ShopPage />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/categorias/:clasificacion" element={<CategoriasPage />} />
            </Routes>
          </div>
        </Router>
      </ProductoProvider>
    );
  }
}

export default App;
