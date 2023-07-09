import * as React from 'react';
import { Link } from 'react-router-dom';
import "./ItemListContainer.css"

import { useEffect, useState } from "react"
import CardPlayer from '../CardPlayer/CardPlayer.jsx'
//Firebase
import { db } from '../../firebase/firebaseConfig'
import { collection, query, getDocs } from 'firebase/firestore'

const Cards = () => {
    const [producto, setProducto] = useState([])

    useEffect(() => {
        const getproductos = async () => {
            const q = query(collection(db, "productos"))
            const docs = []
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setProducto(docs)
        }
        getproductos()
    }, [])
    return (
        <div className='Cards-Container'>
            {producto.map((prod) => {
                return (
                    <div className='Cards-Image' key={prod.id}>
                        <Link to={`/detail/${prod.id}`}
                            style={{ textDecoration: "none" }}>
                            <CardPlayer data={prod} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;
