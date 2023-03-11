import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BasicCard() {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Stack sx={{ marginTop: 0 }} spacing={2}>
                    <Alert variant="filled" severity="warning" sx={{ width: '100%', backgroundColor: '#709fc4' }}>
                        Tu nombre - sobre mi
                    </Alert>

                    <TextField
                        disabled
                        id="outlined-disabled"
                        multiline
                        defaultValue="Soy un artista y modelador 3d apasionado por el diseño y la creación de mundos fantásticos y personajes únicos. Mi experiencia en la industria del cine y los videojuegos me ha permitido trabajar en proyectos emocionantes y desafiantes, lo que me ha dado la habilidad de llevar cualquier idea a la realidad con habilidad y creatividad."
                    />
                </Stack>
            </CardContent>
        </Card>
    );
}