import React, { useContext } from "react";
import { ProductosContext } from "../../context/ProductosContext";
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const [items, setItems] = useContext(ProductosContext);

    const groupedItems = items.reduce((grouped, item) => {
        if (!grouped[item.nombre]) {
            grouped[item.nombre] = { ...item };
        } else {
            grouped[item.nombre].cantidad += item.cantidad;
        }
        return grouped;
    }, {});

    const totalPrice = Object.values(groupedItems).reduce((total, item) => total + item.cantidad * item.precio, 0);

    const removeFromCart = (nombre) => {
        const updatedItems = items.filter(item => item.nombre !== nombre);
        setItems(updatedItems);
    }

    return (
        <div className="cart-container">
            <h2>Carrito de compras</h2>
            {Object.values(groupedItems).length > 0 ? (
                <>
                    {Object.values(groupedItems).map((item) => (
                        <div className="cart-item" key={item.nombre}>
                            <img src={item.img} alt={item.nombre} />
                            <div className="cart-item-details">
                                <p className="cart-item-name">{item.nombre}</p>
                                <p className="cart-item-price">Precio Unitario: $ {item.precio}</p>
                                <p style={{ borderBottom: '1px dashed black', paddingBottom: '5px' }}>
                                    Cantidad: {item.cantidad}
                                </p>
                                <p>Precio Total: {item.cantidad * item.precio}</p>
                                <button onClick={() => removeFromCart(item.nombre)}
                                    className="remove-from-cart">Quitar del carrito</button>
                            </div>
                        </div>
                    ))}
                    <p className="cart-total">Precio Total del Carrito: $ {totalPrice}</p>
                    <Link to="/shop">
                        <button className="finish-purchase">Finalizar Compra</button>
                    </Link>
                </>
            ) : (
                <p className="cart-empty">El carrito está vacío.</p>
            )}
        </div>
    );
};

export default Cart;