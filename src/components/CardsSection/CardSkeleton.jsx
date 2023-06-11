import { Paper, Skeleton } from "@mui/material";
import React from "react";



const CardSkeleton = () => {

    return (
        <Paper elevation={3}
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: 130, sm: 160, md: 180 },
                minWidth: { xs: 130, sm: 160, md: 180 },
                height: { xs: 200, sm: 255, md: 255 },
                p: { xs: .5, md: 1 },
                overflow: "hidden",
                cursor: "pointer",
                m: .5,
                boxShadow: t => t.shadows[2],
                ":hover": { boxShadow: t => t.shadows[6], filter: "contrast(90%)" }
            }}>
            <Skeleton sx={{ width: "100%", aspectRatio: '1', my: { xs: .5, md: 1 }, boxShadow: t => t.shadows[1] }} />
        </Paper>
    );
}

export default CardSkeleton;