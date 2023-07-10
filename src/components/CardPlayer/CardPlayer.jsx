import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardPlayer = ({ data, showDescription }) => {
    return (
        <Card sx={{ maxWidth: 345, marginTop: '30px' }}>
            <CardActionArea>
                <CardMedia component="img" height="140" image={data.img} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.nombre}
                    </Typography>
                    {showDescription && (
                        <Typography variant="body2" color="black">
                            {data.descripcion}
                        </Typography>
                    )}
                    <Typography
                        variant="body2"
                        color="black"
                        sx={{
                            marginTop: '15px',
                            backgroundColor: '#f5f5f5',
                            padding: '5px',
                            fontWeight: 'bold',
                        }}
                    >
                        Precio ${data.precio}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardPlayer;