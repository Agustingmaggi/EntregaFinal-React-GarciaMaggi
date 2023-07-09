import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CardPlayer from '../../components/CardPlayer/CardPlayer.jsx'
import './detail.css'

import {
    collection, query, where, getDocs, documentId,
} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

const DetailPage = () => {
    const [producto, setProducto] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getproductos = async () => {
            const q = query(
                collection(db, "productos"),
                where(documentId(), "==", id)
            )
            const docs = []
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setProducto(docs)
        }
        getproductos()
    }, [id])

    return (
        <div className="detalle-prod">
            {producto.map((prod) => {
                return (
                    <div key={prod.id}>
                        <CardPlayer data={prod} />
                    </div>
                )
            }
            )}
        </div>
    )
}

export default DetailPage