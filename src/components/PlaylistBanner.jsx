import { AddAPhoto } from "@mui/icons-material";
import { Avatar, Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import AvatarInput from "./AvatarInput";
import UpdatePlaylistCard from "./UpdatePlaylistCard";



const PlaylistBanner = ({ description, title, type, avatar, onChange, playlistId, enableEdit, onAvatarChange }) => {




    return (
        <Paper sx={{
            width: "100%", p: 5, minHeight: 300, display: "flex", alignItems: "center",
            background: t => `linear-gradient(to top, ${t.palette.background.paper}, ${t.palette.divider} 300px)`
        }} elevation={3}>
            <AvatarInput src={avatar} disabled={!enableEdit} sx={{ width: 220, height: 220, boxShadow: t => t.shadows[4] }} onChange={onAvatarChange}/>
            <Stack spacing={2} sx={{ pl: 5, width: "100%" }}>
                <Typography variant="button">{type}</Typography>
                <Typography variant="h2">{title}</Typography>
                <Typography >{description}</Typography>
            </Stack>
            {enableEdit && <UpdatePlaylistCard playlistId={playlistId} title={title} description={description} onChange={onChange}/>}
        </Paper>
    );
}


export default PlaylistBanner;