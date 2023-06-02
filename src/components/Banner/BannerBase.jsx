import { Box, Paper} from "@mui/material";
import React from "react";
import { useScroll } from "../../contexts/ScrollContext";
import { interpolate } from "../../utils/Interpolator";



const BannerBase = ({ children, color }) => {
    const { scroll } = useScroll();
    const p = scroll > 500 ? 250 : scroll / 1.7;

    return (
        <Box sx={{ overflow: "hidden" }}>
            <Paper sx={{
                width: "100%",
                position: "relative",
                py: { xs: 1, sm: 3, md: 5 },
                px: { xs: 0.5, sm: 1, md: 2 },
                minHeight: 300,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                opacity: interpolate(scroll, [0, 100, 275], [1, 1, 0]),
                transform: `translateY(${p}px)`,
                background: t => `linear-gradient(to top, ${t.palette.background.paper}, ${color || t.palette.primary.light} 1000px)`
            }} elevation={0}>
                {children}
            </Paper>
        </Box>
    );
}


export default BannerBase;