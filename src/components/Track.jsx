import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Track = () => {

    return (
        <Stack spacing={2} direction="row"  sx={{ height: "100%", minWidth: 100, p: 1, }} alignItems="center">
            <Avatar variant="square" sx={{ width: 65, height: 65 }} />
            <Stack sx={{ "&>*:hover": { transform: "scale(1.05)" } }}>
                <Link><Typography noWrap>{track.title}</Typography></Link>
                <Link><Typography variant="caption" color="GrayText">{track.user.username}</Typography></Link>
            </Stack>
        </Stack>
    );
}

const track = {
    'id': 250,
    'user': {
        "username": "user",
    },
    'title': "Track name",
    'duration': 53,
    'explicit': false,
    'written_by': "somebody",
    'performed_by': "somebody",
}


export default Track;