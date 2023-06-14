import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Basic.css'

export default function BasicSelect() {
    const [categoria, setCategoria] = React.useState('');

    const handleChange = (event) => {
        setCategoria(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Categoría</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoria}
                    label="Categoría"
                    onChange={handleChange}
                    className='select-component'
                >
                    <MenuItem value="aves" component={Link} to="/category/ave" style={{ background: 'black', color: 'white' }}>Aves</MenuItem>
                    <MenuItem value="mamiferos" component={Link} to="/category/mamifero" style={{ background: 'black', color: 'white' }}>Mamíferos</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}