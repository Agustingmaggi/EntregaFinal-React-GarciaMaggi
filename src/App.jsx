import React from 'react';
import './App.css'

import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {
  {
    return (
      <div>
        <div className='navbar'>
          <NavBar />
        </div>
        <div>
          <ItemListContainer greeting=" haciendo greeting como en clase"/>
        </div>
      </div>
    );
  }
}

export default App;
