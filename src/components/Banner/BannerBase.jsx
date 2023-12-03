import { Box, Paper} from "@mui/material";
import React, { useRef } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import { interpolate } from "../../utils/Interpolator";



const BannerBase = ({ children, color }) => {
    const ref = useRef();
    const { scroll } = useScroll();
    const max = React.useMemo( () => ref.current ? ref.current.offsetHeight - 50 : 275, [ref?.current?.offsetHeight]);

    return (
        <Box sx={{ overflow: "hidden" }} ref={ref}>
            <Paper sx={{
                width: "100%",
                position: "relative",
                py: { xs: 1, sm: 3, md: 5 },
                px: { xs: 0.5, sm: 1, md: 2 },
                minHeight: 300,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                opacity: interpolate(scroll, [0, max/3, max], [1, 1, 0]),
                transform: `translateY(${interpolate(scroll, [0, max], [0, max / 2])}px) scale(${interpolate(scroll, [0, max/2, max], [1, 1, .95])})`,
                background: t => `linear-gradient(to top, ${t.palette.background.paper}, ${color || t.palette.primary.light} 110%)`
            }} elevation={0}>
                {children}
            </Paper>
        </Box>
    );
}


export default BannerBase;