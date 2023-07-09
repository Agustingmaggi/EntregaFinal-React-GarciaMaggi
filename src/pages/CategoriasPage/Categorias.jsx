import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CardPlayer from '../../components/CardPlayer/CardPlayer.jsx'
import './Categorias.css'
import { Link } from 'react-router-dom';

import {
  collection, query, where, getDocs,
} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

const CategoriasPage = () => {
  const [producto, setProducto] = useState([])
  const { clasificacion } = useParams()

  useEffect(() => {
    const getproductos = async () => {
      const q = query(
        collection(db, "productos"),
        where("clasificacion", "==", clasificacion)
      )
      const docs = []
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setProducto(docs)
    }
    getproductos()
  }, [clasificacion])

  return (
    <div className="categorias">
      {producto.map((prod) => {
        return (
          <div key={prod.id}>
            <Link to={`/detail/${prod.id}`}>
              <CardPlayer data={prod} />
            </Link>
          </div>
        )
      }
      )}
    </div>
  )
}

export default CategoriasPage