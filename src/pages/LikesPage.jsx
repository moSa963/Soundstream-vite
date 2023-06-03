import { Box } from "@mui/material";
import React from "react";
import { APP_URL } from "../utils/Request";
import Playlist from "../components/Playlist/Playlist";
import AddToPlaylistCard from "../components/Dialogs/AddToPlaylistCard";
import { usePlayer } from "../contexts/PlayerContext";
import PlaylistBanner from "../components/Playlist/PlaylistBanner";


const LikesPage = () => {
    const [action, setAction] = React.useState({ name: null, payload: null });
    const [tracks, setTracks] = React.useState([]);
    const { addTrack } = usePlayer();

    return (
        <Box sx={{ width: "100%" }} >

            <PlaylistBanner
                avatar={`${APP_URL}img/likes.png`}
                playlist={{ title: "Liked Songs", }}
                tracks={tracks}
                type="playlist"
            />

            <Playlist 
                tracks={tracks}
                setTracks={setTracks}
                playlist={{ title: "Liked Songs", }}
                dataUrl="api/likes"
                actions={["Add to playlist", "Add to queue"]}
                onAction={(action, track) => handleAction(action, track, setAction, addTrack)}
            />

            <AddToPlaylistCard open={action.name == "Add to playlist"}  track={action.payload} onClose={() => setAction({ name: null, payload: null }) } />
        </Box>
    );
}

const handleAction = (action, track, setAction, addTrack) => {
    switch(action)
    {
        case "Add to playlist": setAction({ name: action, payload: track }); break;
        case "Add to queue": addTrack(track); break;
    }
}

export default LikesPage;