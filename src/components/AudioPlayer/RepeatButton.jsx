import React from "react";
import Repeat from "@mui/icons-material/Repeat";
import RepeatOne from "@mui/icons-material/RepeatOne";
import { IconButton } from "@mui/material";


const RepeatButton = ({ repeat, setOptions }) => {

    const handleClick = () => {
        setOptions(os => ( { ...os, repeat: !repeat || repeat == 'none' ? 'list': repeat == 'list' ? "one" : "none" } ));
    }

    return (
        <IconButton size="small" onClick={handleClick} title={options[repeat || "none"].title}>
            {options[repeat || "none"].Icon}
        </IconButton>
    );
}

const options = {
    none: {
        Icon: <Repeat sx={{ fontSize: "1.2rem" }}/>,
        title: "Enable repeat",
    },
    list: {
        Icon: <Repeat color="info" sx={{ fontSize: "1.2rem" }}/>,
        title: "Enable repeat one",
    },
    one: {
        Icon: <RepeatOne color="info" sx={{ fontSize: "1.2rem" }}/>,
        title: "Disable repeat",
    },
}

export default RepeatButton;