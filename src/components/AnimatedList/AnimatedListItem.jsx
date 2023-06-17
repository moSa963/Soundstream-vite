import { Box } from "@mui/material";
import React, { useRef } from "react";
import { interpolate } from "../../utils/Interpolator";




const AnimatedListItem = ({ rect, children }) => {
    const ref = useRef();
    const clientRect = ref.current?.getBoundingClientRect();
    const input = [rect?.top - clientRect?.height, rect?.top, rect?.bottom - clientRect?.height, rect?.bottom];


    return (
        <Box ref={ref} sx={{ 
            width: "100%", 
            bgcolor: "inherit", 
            zIndex: Math.floor(interpolate(clientRect?.top, input, [1, 2, 2, 1]))}} 
        >
            <Box 
                sx={{
                    bgcolor: "inherit",
                    width: "100%",
                    opacity: interpolate(clientRect?.top, input, [0, 1, 1, 0]),
                    transform: `translateY(${interpolate(clientRect?.top, input, [clientRect?.height / 2, 0, 0, -clientRect?.height / 2])}px) scale(${interpolate(clientRect?.top, input, [.9, 1, 1, .9])})`,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}



export default AnimatedListItem;