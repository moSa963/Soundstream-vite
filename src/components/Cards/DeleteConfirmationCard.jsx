import { Backdrop, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";



const DeleteConfirmationCard = ({ title, open, onClose, onConfirmed }) => {

    return (
        <Backdrop open={open} onClick={(e) => e.currentTarget == e.target && onClose()} sx={{ zIndex: 10000 }}>
            <Paper sx={{ width: "100%", p: 2, maxWidth: 550, }}>
                <Typography>Are you sure you want to delete this {title}</Typography>
                <Stack spacing={2} sx={{ width: "100%", maxHeight: 300, overflow: "auto", alignItems: "end" }}>

                    <Stack direction="row" spacing={2}>
                        <Button color="error" onClick={onConfirmed}>Yes</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Backdrop>
    );
}

export default DeleteConfirmationCard;