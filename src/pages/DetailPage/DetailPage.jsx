import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/Data.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Detail.css';

const DetailPage = () => {
    const { id } = useParams();

    // Convertir el id a un número
    const itemId = parseInt(id);

    // Filtrar los elementos en data que coincidan con el id
    const filteredItems = data.filter(item => item.id === itemId);

    if (filteredItems.length === 0) {
        return <div>No se encontró el elemento con el ID proporcionado</div>;
    }

    const item = filteredItems[0];

    return (
        <>
            <h1>Detalle del proyecto!</h1>
            <div className='Cards-Container'>
                <Card key={item.id}>
                    <CardActionArea>
                        <CardMedia
                            className='Cards-Image'
                            component="img"
                            image={item.foto}
                            alt={item.nombre}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Titulo: {item.nombre}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.descripcion}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    );
};

export default DetailPage;