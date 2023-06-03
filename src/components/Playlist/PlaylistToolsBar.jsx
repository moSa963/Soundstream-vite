import { InputBase, Stack } from "@mui/material";
import React from "react";
import UploadTrackCard from "../Dialogs/UploadTrackCard";
import LikePlaylistButton from "./LikePlaylistButton";


const PlaylistToolsBar = ({ filter, setFilter, enableUpload, onTrackAdded, playlist, setPlaylist }) => {



    return (
        <Stack direction="row" sx={{ width: "100%", p: 2 }}>
            <LikePlaylistButton
                playlist={playlist}
                setLiked={(v) => setPlaylist(p => ({...p, liked: v}))}
            />

            <InputBase
                value={filter}
                onChange={(e) => setFilter(e.currentTarget.value)}
                placeholder="Search..."
                sx={{ width: "100%", px: 2, fontSize: 20 }}
            />
            {
                enableUpload &&
                <UploadTrackCard album={playlist} onTrackAdded={onTrackAdded} />
            }
        </Stack>
    );
}

export default PlaylistToolsBar;