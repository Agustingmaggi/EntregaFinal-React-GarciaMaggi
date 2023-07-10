import React, { useContext } from "react";
import { ProductosContext } from "../../context/ProductosContext";

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
        </div>
    );
};

export default Cart;