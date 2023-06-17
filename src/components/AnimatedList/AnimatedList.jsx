import { Box } from "@mui/material";
import React, { useRef } from "react";
import AnimatedListItem from "./AnimatedListItem";




const AnimatedList = ({ values, map }) => {
    const ref = useRef();
    const [scroll, setScroll] = React.useState(0);

    return (
        <Box 
            onScroll={(e) => setScroll(e.currentTarget.scrollTop)}
            sx={{ display: "flex", flexDirection: "column", flex: 1, overflow: "auto", width: "100%", bgcolor: "inherit" }} 
            ref={ref}
        >
            {
                values?.map(v => (
                    <AnimatedListItem key={v.id} rect={ref.current?.getBoundingClientRect()} >
                        {map(v)}
                    </AnimatedListItem>
                ))
            }
        </Box>
    );
}



export default AnimatedList;