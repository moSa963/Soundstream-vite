import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { APP_URL } from "../../utils/Request";
import { Link } from "react-router-dom";


const PlaylistInfo = ({ user, trackCount }) => {


    return (
        <Stack direction="row" spacing={1} flexWrap="wrap">
            {
                user &&
                <Link to={`/user/${user.username}`}>
                    <Stack direction="row" spacing={.5} sx={{ cursor: "pointer", color: t => t.palette.text.secondary, ":hover": { color: t => t.palette.text.primary } }}>
                        <Avatar sx={{ width: 25, height: 25 }} src={`${APP_URL}api/account/${user.username}/profile/photo`} />
                        <Typography noWrap>{user.username}</Typography>
                    </Stack>
                </Link>
            }
            <Typography>&bull;</Typography>
            <Typography>{trackCount} {trackCount > 1 ? "tracks" : "track"}</Typography>
        </Stack>
    );
}


export default PlaylistInfo;