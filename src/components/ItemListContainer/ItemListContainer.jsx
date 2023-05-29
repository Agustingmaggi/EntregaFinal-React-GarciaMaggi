import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
    <div>
        <p>Mensaje:{greeting}</p>
    </div>
    <div>Otro mensaje para probar algo: Prefiero typear lo menos posible en App.jsx porque lo deja mas desprolijo, 
        por otro lado entiendo que la idea seria tener muchos componentes y que todos le envien info al App y que luego App renderice la vista, 
        entonces no me gusta mandar cosas desde app hacia los componentes. Estoy equivocado en pensar asi?
        Por otro lado, estamos trayendo greeting desde app sin importar el archivo app acá pero no podemos llevar info de aca hacia app si no importamos este archivo desde app, por que?
        </div>
    </div>
  )
}

export default ItemListContainer