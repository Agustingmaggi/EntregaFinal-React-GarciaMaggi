import React, { useContext } from "react";
import { ProductosContext } from "../../context/ProductosContext";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
    const [items] = useContext(ProductosContext); // Obtén el estado del contexto

    return (
        <div>
            <h2>Carrito de compras</h2>
            {items.map((item) => (
                <div key={item.nombre}>
                    <img src={item.img} alt={item.nombre} />
                    <p>{item.nombre}</p>
                    <p>Precio: {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                </div>
            ))}
            <Link to="/shop">
                <button>Finalizar Compra</button>
            </Link>
        </div>
    );
};

export default Cart;