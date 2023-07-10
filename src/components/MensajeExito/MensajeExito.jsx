import * as React from "react"
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"

const MensajeExito = ({ idCompra }) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">
                Gracias por tu compra, guarda este id de transaccion: {idCompra}
            </Alert>
        </Stack>
    )
}

export default MensajeExito