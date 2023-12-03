import { AddAPhoto } from "@mui/icons-material";
import { Avatar, Box, Button } from "@mui/material";
import React from "react";
import { dominantColor } from "../utils/colors";



const AvatarInput = ({ src, sx, disabled, onChange, onDominantColorLoad }) => {
    const [hover, setHover] = React.useState(false);

    const handleLoad = (img) => {
        const canv = document.createElement("canvas");
        canv.width = img.width / 2;
        canv.height = img.height / 2;
        
        const ctx = canv.getContext("2d");
        ctx.drawImage(img, 0, 0, canv.width, canv.height);
        const imageData = ctx.getImageData(0, 0, canv.width, canv.height);
        onDominantColorLoad && onDominantColorLoad(dominantColor(imageData.data));
    }

    return (
        <Box sx={{ position: "relative" }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Avatar src={src} sx={{ ...sx, opacity: hover && !disabled ? 0.1 : 1 }} variant="square" onLoad={(e) => handleLoad(e.target)} />
            {hover && !disabled &&
                <Button sx={{ position: "absolute", inset: "0 0 0 0" }}
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
                </Button>}
        </Box>
    )
}


export default AvatarInput;