import { Avatar, Paper, Stack, Typography } from "@mui/material";
import React from "react";



const PlaylistBanner = ({ description, title, type, avatar }) => {


    return (
        <Paper sx={{ width: "100%", p: 5, minHeight: 300, display: "flex", alignItems: "center",
         background: t => `linear-gradient(to top, ${t.palette.background.paper}, ${t.palette.divider} 300px)`  }} elevation={3}>
            <Avatar src={avatar} sx={{width: 220, height: 220, boxShadow: t => t.shadows[4] }} variant="square"/>
            <Stack spacing={2} sx={{ pl: 5 }}>
                <Typography variant="button">{type}</Typography>
                <Typography variant="h2">{title}</Typography>
                <Typography >{description}</Typography>
            </Stack>
        </Paper>
    );
}


export default PlaylistBanner;