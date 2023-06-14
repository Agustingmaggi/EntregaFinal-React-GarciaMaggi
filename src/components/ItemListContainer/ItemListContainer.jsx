import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import data from '../../Data/Data.json'
import "./ItemListContainer.css"
import { Link } from 'react-router-dom';


const Cards = () => {
    return (
        <>
            <h1>Esta es la Home!</h1>
            <div className='Cards-Container'>
                {data.map((proyecto) => (
                    <Card key={proyecto.id}>
                        <Link to={`item/${proyecto.id}`} className='Card-Link'>
                            <CardActionArea>
                                <CardMedia
                                    className='Cards-Image'
                                    component="img"
                                    image={proyecto.foto}
                                    alt={proyecto.nombre}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Titulo: {proyecto.nombre}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {proyecto.descripcion}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Cards;