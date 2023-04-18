import { Avatar, Paper, Stack, Typography } from "@mui/material";
import React from "react";



const PlaylistBanner = () => {


    return (
        <Paper sx={{ width: "100%", p: 5, height: 300, display: "flex", alignItems: "end",
         background: t => `linear-gradient(to top, ${t.palette.background.paper}, ${t.palette.divider} 300px)`  }} elevation={3}>
            <Avatar sx={{width: 220, height: 220, boxShadow: t => t.shadows[4] }} variant="square"/>
            <Stack spacing={2} sx={{ pl: 5 }}>
                <Typography variant="button">{playlit.album ? "album" : "playlist"}</Typography>
                <Typography variant="h1">{playlit.title}</Typography>
                <Typography >{playlit.description}</Typography>
            </Stack>
        </Paper>
    );
}

const playlit = {
    'id': 25,
    'user': {
        "username": "username",
    },
    'title': "playlist title",
    'description': "this playlist description should be here",
    'album': false,
}

export default PlaylistBanner;