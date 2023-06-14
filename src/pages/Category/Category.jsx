import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import data from '../../Data/Data.json';

const Category = () => {
    const { categoryId } = useParams();
    const filteredItems = data.filter(item => categoryId === item.categoria);

    if (filteredItems.length === 0) {
        return <div>No se encontró el elemento con el ID proporcionado</div>;
    }

    return (
        <>
            <h1>Detalle del proyecto!</h1>
            <div className='Cards-Container'>
                {filteredItems.map(item => (
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
                ))}
            </div>
        </>
    );
};

export default Category;