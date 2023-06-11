import { Box, Stack } from "@mui/material";
import React from "react";
import Playlist from "../Playlist/Playlist";
import PlaylistItem from "./PlaylistItem";


const PlaylistsStack = ({ playlists, setPlaylists }) => {

    return (
        <Stack spacing={5} sx={{ width: "100%" }}>
            {
                playlists?.map(v => (
                    <Box key={v.id}>
                        <PlaylistItem
                            type="playlist"
                            playlist={v}
                        />

                        <Playlist sx={{ px: { xs: 0, sm: 5 } }}
                            url={`api/playlists/${v.id}/tracks`}
                            playlist={v}
                            setPlaylist={(p) => setPlaylists(ps => ps.map(v => v.id == p.id ? p : v))}
                        />
                    </Box>
                ))
            }
        </Stack>
    );
}

export default PlaylistsStack;