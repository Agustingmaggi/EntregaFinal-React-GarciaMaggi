import { useState, createContext } from "react"
export const ProductosContext = createContext()

const initialState = []

export const ProductoProvider = ({ children }) => {
    const [items, setItems] = useState(initialState)
    console.log("Productos actuales:", items)
    return (
        <ProductosContext.Provider value={[items, setItems]}>
            {children}
        </ProductosContext.Provider>
    )
}