import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CardPlayer from '../../components/CardPlayer/CardPlayer.jsx';
import './detail.css';
import { ProductosContext } from "../../context/ProductosContext";
import {
    collection,
    query,
    where,
    getDocs,
    documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const DetailPage = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams();
    const [items, setItems] = useContext(ProductosContext); // Obtén el estado del contexto
    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        const getproductos = async () => {
            const q = query(
                collection(db, "productos"),
                where(documentId(), "==", id)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducto(docs);

        };
        getproductos();
    }, [id]);

    const incrementarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const decrementarCantidad = () => {
        if (cantidad >= 1) {
            setCantidad(cantidad - 1);
        }
    };

    const agregarAlCarrito = () => {
        const productoSeleccionado = producto[0];
        const itemCarrito = {
            img: productoSeleccionado.img,
            clasificacion: productoSeleccionado.clasificacion,
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            cantidad: cantidad,
        };
        // console.log(agregarAlCarrito)

        setItems((prevItems) => [...prevItems, itemCarrito]);
    };

    return (
        <div className="detalle-prod">
            {producto.map((prod) => {
                return (
                    <div className="detalle-prodd" key={prod.id}>
                        <CardPlayer data={prod} />

                        <div className="cantidad-container">
                            <button onClick={decrementarCantidad}>-</button>
                            <span>{cantidad}</span>
                            <button onClick={incrementarCantidad}>+</button>
                            <button onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DetailPage;