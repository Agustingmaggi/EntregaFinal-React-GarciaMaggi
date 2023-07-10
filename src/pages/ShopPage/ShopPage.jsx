import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { ProductosContext } from "../../context/ProductosContext";
import MensajeExito from "../../components/MensajeExito/MensajeExito";
import "./ShopPage.css"

const initialState = {
    nombre: "",
    email: "",
    emailx2: ""
};

const ShopPage = () => {
    const [values, setValues] = useState(initialState);
    const [idCompra, setidCompra] = useState(null);
    const [items, setItems] = useContext(ProductosContext);
    const [buttonPressed, setButtonPressed] = useState(false);
    const [formIncomplete, setFormIncomplete] = useState(false);

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
        setFormIncomplete(false);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (values.nombre && values.email && values.emailx2) {
            setButtonPressed(true);
            const docRef = await addDoc(collection(db, "Compra"), {
                values
            });
            setidCompra(docRef.id);
            setValues(initialState);
            setItems([]);
            setTimeout(() => {
                setButtonPressed(false);
            }, 500);
        } else {
            setFormIncomplete(true);
        }
    };

    return (
        <div>
            <h2>ShopPage</h2>
            <form className="FormContainer" onSubmit={onSubmit}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                        placeholder="Nombre"
                        style={{ marginBottom: 10, width: 400 }}
                        name="nombre"
                        value={values.nombre}
                        onChange={handleOnChange}
                    />
                    <TextField
                        placeholder="Email"
                        style={{ marginBottom: 10, width: 400 }}
                        name="email"
                        value={values.email}
                        onChange={handleOnChange}
                    />
                    <TextField
                        placeholder="Confirma tu email"
                        style={{ marginBottom: 10, width: 400 }}
                        name="emailx2"
                        value={values.emailx2}
                        onChange={handleOnChange}
                    />
                </div>
                {formIncomplete && (
                    <p style={{ color: "red", marginTop: 5 }}>
                        Por favor, introduce tus datos para finalizar tu compra.
                    </p>
                )}
                <button
                    className={`boton ${buttonPressed ? "pressed" : ""}`}
                    onClick={onSubmit}
                    disabled={formIncomplete}
                >
                    Enviar
                </button>
            </form>
            {idCompra ? <MensajeExito idCompra={idCompra} /> : null}
        </div>
    );
};

export default ShopPage;