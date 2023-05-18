import { Backdrop, LinearProgress, Paper, Stack } from "@mui/material";
import React from "react";



const CardBase = ({ open, setOpen, children, maxWidth=550, maxHeight=300, progress }) => {

    return (
        <Backdrop open={open} onClick={(e) => e.currentTarget == e.target && setOpen(false)} sx={{ zIndex: 10000, margin: "0px !important" }}>
            <Paper sx={{ width: "100%", p: 2, maxWidth: maxWidth, maxHeight: maxHeight, overflow: "auto", position: "relative" }}>
                <Stack spacing={2} sx={{ width: "100%", alignItems: "end" }}>
                    {progress && <LinearProgress sx={{ width: "100%", position: "absolute", left: 0, right: 0, top: 0 }} />}
                    {children}
                </Stack>
            </Paper>
        </Backdrop>
    );
}

export default CardBase;