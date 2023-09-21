import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import TextButton from "../TextButton";
import { APP_URL } from "../../utils/Request";



const PlaylistItem = ({ playlist, small }) => {
    const nav = useNavigate();

    return (
        <Box sx={{ overflow: "hidden", width: "100%" }} title={playlist.title}>
            <Box
                onClick={() => nav(`/library/playlists/${playlist.id}`)}
                sx={{
                    width: "100%",
                    p: small ? 0.5 : 1,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    ":hover": { backgroundColor: t => t.palette.action.hover, }
                }}
            >
                <Avatar
                    src={`${APP_URL}api/playlists/${playlist.id}/photo/${playlist.image}`}
                    sx={{ width: small ? 40 : { xs: 75, sm: 100 }, height: small ? 40 : { xs: 75, sm: 100 }, boxShadow: t => t.shadows[2] }}
                    variant="square"
                />

                <Stack spacing={small ? 1 : 2} sx={{ px: small ? 1 : { xs: 1, sm: 3},  width: "100%", overflow: "hidden", }}>
                    <Typography variant="h2" sx={{ width: "100%", fontSize: small ? 15 : { xs: 20, sm: 25, } }} noWrap>{playlist.title}</Typography>
                    <Stack direction="row" spacing={.5} >
                        <Typography color="gray">{playlist.album ? "Album" : "Playlist"}</Typography>
                        <Typography>&bull;</Typography>
                        <TextButton title={`@${playlist.user.username}`} noWrap onClick={() => nav(`/user/${playlist.user.username}`)} />
                    </Stack>
                </Stack>
                
            </Box>
        </Box>
    );
}


export default PlaylistItem;