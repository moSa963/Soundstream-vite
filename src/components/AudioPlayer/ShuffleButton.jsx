import React from "react";
import { IconButton } from "@mui/material";
import Shuffle from "@mui/icons-material/Shuffle";


const ShuffleButton = ({ shuffle, setOptions }) => {

    const handleClick = () => {
        setOptions(os => ( {...os, shuffle: !shuffle} ));
    }

    return (
        <IconButton size="small" onClick={handleClick} title={shuffle ? "Disable shuffle" : "Enable shuffle"}>
            { shuffle ? <Shuffle color="info"/> : <Shuffle/> }
        </IconButton>
    );
}

export default ShuffleButton;