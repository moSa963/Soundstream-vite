import { AddAPhoto } from "@mui/icons-material";
import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";



const AvatarInput = ({ src, sx, disabled, onChange }) => {
    const [hover, setHover] = React.useState(false);

    return (
        <Box sx={{ position: "relative" }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Avatar src={src} sx={{...sx,  opacity: hover ? 0.1 : 1}} variant="square"  />
            {hover && !disabled &&
                <IconButton sx={{ position: "absolute", inset: "0 0 0 0" }}
                    onClick={(e) => e.currentTarget.children[1].click()}
                >
                    <AddAPhoto />
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => onChange && onChange(e.currentTarget.files[0])}
                    ></input>
                    UPDATE
                </IconButton>}
        </Box>
    )
}


export default AvatarInput;