import React, { useState, useEffect } from "react"
import TextField from "@mui/material/TextField"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import MensajeExito from "../../components/MensajeExito/MensajeExito"


const initialState = {
    nombre: "",
    email: "",
    emailx2: ""
}


const ShopPage = () => {
    const [values, setValues] = useState(initialState)
    const [idCompra, setidCompra] = useState(null)

    const handleOnChange = (e) => {
        const { value, name } = e.target
        setValues({ ...values, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const docRef = await addDoc(collection(db, "Compra"), {
            values,
        })
        // console.log("Document written with ID: ", docRef.id)
        setidCompra(docRef.id)
        setValues(initialState)
    }

    return (
        <div>ShopPage
            <form className="FormContainer" onSubmit={onSubmit}>
                <TextField
                    placeholder="Nombre"
                    style={{ margin: 10, width: 400 }}
                    name="nombre"
                    value={values.nombre}
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder="Email"
                    style={{ margin: 10, width: 400 }}
                    name="email"
                    value={values.email}
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder="Confirma tu email"
                    style={{ margin: 10, width: 400 }}
                    name="emailx2"
                    value={values.emailx2}
                    onChange={handleOnChange}
                />
                <button className="boton">Enviar</button>
            </form>
            {idCompra ? <MensajeExito idCompra={idCompra} /> : null}
        </div>
    )
}

export default ShopPage