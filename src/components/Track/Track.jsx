import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { APP_URL } from "../../utils/Request";


const Track = ({ small, children, track }) => {
    
    return (
        <Stack spacing={2} direction="row"  sx={{ width: "100%", height: "100%", minWidth: 100, p: small ? 0 : 1, }} alignItems="center">
            <Avatar variant="square" sx={{ width: small ? 35 : 65, height: small ? 35 : 65 }} src={`${APP_URL}api/tracks/${track.id}/photo`}/>
            <Stack sx={{ "&>*:hover": { transform: "scale(1.05)" } }}>
                <Link><Typography noWrap>{track.title}</Typography></Link>
                <Link><Typography variant="caption" color="GrayText">{track.user.username}</Typography></Link>
            </Stack>
            {children}
        </Stack>
    );
}

export default Track;