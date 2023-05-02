import { Backdrop, Paper, Stack } from "@mui/material";
import React from "react";



const CardBase = ({ open, setOpen, children, maxWidth=550, maxHeight=300 }) => {

    return (
        <Backdrop open={open} onClick={(e) => e.currentTarget == e.target && setOpen(false)} sx={{ zIndex: 10000 }}>
            <Paper sx={{ width: "100%", p: 2, maxWidth: maxWidth, maxHeight: maxHeight, overflow: "auto" }}>
                <Stack spacing={2} sx={{ width: "100%", alignItems: "end" }}>
                    {children}
                </Stack>
            </Paper>
        </Backdrop>
    );
}

export default CardBase;