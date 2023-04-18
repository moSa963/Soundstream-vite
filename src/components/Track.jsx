import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Track = ({ small }) => {

    return (
        <Stack spacing={2} direction="row"  sx={{ height: "100%", minWidth: 100, p: small ? 0 : 1, }} alignItems="center">
            <Avatar variant="square" sx={{ width: small ? 35 : 65, height: small ? 35 : 65 }} />
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