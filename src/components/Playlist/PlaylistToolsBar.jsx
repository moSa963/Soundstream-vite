import { InputBase, Stack } from "@mui/material";
import React from "react";
import UploadTrackCard from "../Dialogs/UploadTrackCard";
import LikePlaylistButton from "./LikePlaylistButton";
import { useAuth } from "../../contexts/AuthContext";


const PlaylistToolsBar = ({ filter, setFilter, onTrackAdded, playlist, setPlaylist }) => {
    const { user } = useAuth();


    return (
        <Stack direction="row" sx={{ width: "100%", p: 2 }}>
            {
                playlist?.id &&
                <LikePlaylistButton
                    playlist={playlist}
                    setLiked={(v) => setPlaylist(p => ({ ...p, liked: v }))}
                />
            }

            <InputBase
                value={filter}
                onChange={(e) => setFilter(e.currentTarget.value)}
                placeholder="Search..."
                sx={{ width: "100%", px: 2, fontSize: 20 }}
            />
            {
                playlist?.album == true &&
                user?.username === playlist?.user.username &&
                <UploadTrackCard album={playlist} onTrackAdded={onTrackAdded} />
            }
        </Stack>
    );
}

export default PlaylistToolsBar;