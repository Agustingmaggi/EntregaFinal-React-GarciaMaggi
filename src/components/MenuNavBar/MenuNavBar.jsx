import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

function MenuNavBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ flexGrow: 1, justifyContent: 'center' }}>
            <Button onClick={handleClick} style={{ color: 'white' }}>
                Categorias
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to="/Categorias/fruta" style={{ textDecoration: "none" }}>Frutas</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/Categorias/verdura" style={{ textDecoration: "none" }}>Verduras</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/Categorias/lacteo" style={{ textDecoration: "none" }}>Lacteos</Link></MenuItem>
            </Menu>
        </div>
    );
}

export default MenuNavBar;