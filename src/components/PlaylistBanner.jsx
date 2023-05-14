import { IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import AvatarInput from "./AvatarInput";
import UpdatePlaylistCard from "./Cards/UpdatePlaylistCard";
import Edit from "@mui/icons-material/Edit";



const PlaylistBanner = ({ description, title, type, avatar, onChange, playlistId, onAvatarChange, color }) => {
    const [open, setOpen] = React.useState(false);


    return (
        <Paper sx={{
            width: "100%",
            position: "relative",
            p: { xs: 1, sm: 3, md: 5 },
            minHeight: 300,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            background: t => `linear-gradient(to top, ${t.palette.background.paper}, ${color || t.palette.primary.light} 1000px)`
        }} elevation={0}>

            <AvatarInput src={avatar}
                disabled={!onAvatarChange}
                sx={{ width: { xs: 150, sm: 220 }, height: { xs: 150, sm: 200 }, boxShadow: t => t.shadows[4] }}
                onChange={onAvatarChange} />

            <Stack spacing={2} sx={{ px: { xs: 1, sm: 5 }, pt: 2, width: "100%" }}>
                <Typography variant="caption" color="gray">{type}</Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: 20, sm: 30, md: 50 } }}>{title}</Typography>
                <Typography sx={{ fontSize: { xs: 10, sm: 15, md: 20 }, color: "gray" }}>{description}</Typography>
            </Stack>

            {
                onChange && <IconButton onClick={() => setOpen(true)} sx={{ position: "absolute", top: 20, right: 0 }}>
                    <Edit />
                </IconButton>
            }

            {onChange && <UpdatePlaylistCard playlistId={playlistId} title={title} description={description} onChange={onChange} open={open} setOpen={setOpen} />}
        </Paper>
    );
}


export default PlaylistBanner;