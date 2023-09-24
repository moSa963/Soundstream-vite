import React from "react";
import { Box } from "@mui/material";
import PixIcon from '@mui/icons-material/Pix';



const Stamp = ({ offset, time, selected, onClick }) => {


    return (
        <Box sx={{ width: 10, height: 10, position: "absolute", inset: `0 0 0 ${offset}%`}} >
            <Box onClick={onClick}
                title={time}
                sx={{
                    transform: "translateX(-50%)", cursor: "pointer", ":hover": {
                        transform: "translateX(-50%) scale(1.1)"
                    }
                }} >
                <PixIcon color={selected ? "primary" : "inherit"} sx={{ width: "100%", height: "100%" }} />
            </Box>
        </Box>
    );
}


export default Stamp;