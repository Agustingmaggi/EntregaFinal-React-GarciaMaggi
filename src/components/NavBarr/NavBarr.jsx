import { Link } from 'react-router-dom';
import Menu from '../MenuNavBar/MenuNavBar.jsx';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react"
import { ProductosContext } from "../../context/ProductosContext.jsx"

const NavBar = () => {
    const [items] = useContext(ProductosContext)

    return (
        <>
            <nav style={{ backgroundColor: 'green', padding: '10px', width: '100%', position: 'fixed', top: 0, zIndex: 999 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                    <Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="/">Supermercado</Link>
                    <div style={{ flex: 1 }}></div>
                    <Menu />
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: '10px', marginRight: '10px' }}>
                        <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></li>
                        <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/about">About</Link></li>
                        <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact">Contact</Link></li>
                    </ul>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/cart">
                        < ShoppingCartIcon />
                        {items.length}
                    </Link>
                </div>
            </nav >
            <div style={{ marginTop: '60px' }}>
            </div>
        </>
    )
}

export default NavBar;